const svg = d3.select("svg");

const width = parseInt(svg.attr("width"));
const height = parseInt(svg.attr("height"));

const projection = d3.geoAlbers().scale(1300).translate([490, 300]);

d3.json("../data/states-albers-10m.json").then(drawMap);

function airportCreate(airport) {

    airport.longitude = parseFloat(airport.longitude);
    airport.latitude = parseFloat(airport.latitude);

    const coordinates = projection([airport.longitude, airport.latitude]);
    airport.x = coordinates[0];
    airport.y = coordinates[1];

    airport.outgoing = 0;
    airport.incoming = 0;
    airport.flights = [];

    return airport;
}


function flightCountConv(flight) {
    flight.count = parseInt(flight.count);
    return flight;
}
let rad = document.formRad.airportCount;
let prev = null;
for (let i = 0; i < rad.length; i++) {
    rad[i].addEventListener('change', function () {
        (prev) ? console.log(prev.value) : null;
        if (this !== prev) {
            prev = this;
        }
        console.log(this.value);
        svg.select("g#airports").remove();
        svg.select("g#flights").remove();
        svg.select("g#voronoi").remove();
        document.getElementById("svgId").innerHTML += `<g id="flights"></g>`;
        document.getElementById("svgId").innerHTML += `<g id="airports"></g>`;
        document.getElementById("svgId").innerHTML += `<g id="voronoi"></g>`;
        Promise
            .all([d3.csv("../data/airports.csv", airportCreate),
            d3.csv("../data/flights.csv", flightCountConv)])
            .then(processData.bind({quant:this.value}));

    });
}

function processData(values) {

    let airports = values[0];
    let flights = values[1];
    
    let iata = new Map(airports.map(node => [node.iata, node]));

    flights.forEach(function (link) {
        link.source = iata.get(link.origin);
        link.target = iata.get(link.destination);

        link.source.outgoing += link.count;
        link.target.incoming += link.count;
    });
    console.log(flights);

    airports = airports.filter(airport => airport.x >= 0 && airport.y >= 0);
    airports = airports.filter(airport => airport.latitude >= 24.52 && airport.latitude <= 49.38);
    airports = airports.filter(airport => airport.longitude >= -124.77 && airport.longitude <= -66.95);
    airports = airports.filter(airport => airport.state !== "NA");
    airports = airports.filter(airport => airport.outgoing > 0 && airport.incoming > 0);

    airports.sort((a, b) => d3.descending(a.outgoing, b.outgoing));
    
    airports = airports.slice(0, this.quant);
    drawAirports(airports);
    drawPolygons(airports);


    iata = new Map(airports.map(node => [node.iata, node]));
    flights = flights.filter(link => iata.has(link.source.iata) && iata.has(link.target.iata));
    drawFlights(airports, flights);

    drawLegend();
}

function isContinental(state) {
    const id = parseInt(state.id);
    //return true for all states and districts inside
    //usa escept hawaii, alaska and islands
    return id < 60 && id !== 2 && id !== 15;
}

function drawMap(map) {

    //only continental states
    map.objects.states.geometries = map.objects.states.geometries.filter(isContinental);

    svg.select("g#basemap")
        //draw states
        .append("path")
        .datum(topojson.merge(map, map.objects.states.geometries))
        .attr("class", "land")
        .attr("d", d3.geoPath());
    svg.select("g#basemap")
        //draw interior borders
        .append("path")
        .datum(topojson.mesh(map, map.objects.states, (a, b) => a !== b))
        .attr("class", "border interior")
        .attr("d", d3.geoPath());
    svg.select("g#basemap")
        //draw exterior borders
        .append("path")
        .datum(topojson.mesh(map, map.objects.states, (a, b) => a === b))
        .attr("class", "border exterior")
        .attr("d", d3.geoPath());
}

function drawAirports(airports) {

    console.log(airports);
    svg.select("g#airports").selectAll("circle.airport")
        .data(airports, d => d.iata)
        .enter()
        .append("circle")
        .attr("fill", 
            d => d.outgoing > 100000 ? "red" : 
                (d.outgoing > 30000 ? "yellow" : "green"))
        .attr("r", 5)
        .attr("cx", d => d.x)
        .attr("cy", d => d.y)
        .attr("class", "airport")
        .each(function (d) {
            d.bubble = this;
        });
}

function drawPolygons(airports) {
    const geojson = airports.map(function (airport) {
        return {
            type: "Feature",
            properties: airport,
            geometry: {
                type: "Point",
                coordinates: [airport.longitude, airport.latitude]
            }
        };
    });

    const polygons = d3.geoVoronoi().polygons(geojson);

    svg.select("g#voronoi").selectAll("path")
        .data(polygons.features)
        .enter()
        .append("path")
        .attr("d", d3.geoPath(projection))
        .attr("class", "voronoi")
        .on("mouseover", function (d) {
            let airport = d.properties.site.properties;

            d3.select(airport.bubble)
                .classed("highlight", true);

            d3.selectAll(airport.flights)
                .classed("highlight", true)
                .raise();

            let bbox = d3.select("text#tooltip").node().getBBox();
            d3.select("text#tooltip")
                .style("display", null)
                .style("visibility", "visible")
                .attr("text-anchor", (bbox.x<=0?"start":(bbox.x+bbox.width>= width?"end":"middle")))
                .attr("x", airport.x)
                .attr("y", airport.y)
                .text(airport.name+","+airport.city.toUpperCase()+"-"+airport.state);
        })
        .on("mouseout", function (d) {
            let airport = d.properties.site.properties;

            d3.select(airport.bubble)
                .classed("highlight", false);

            d3.selectAll(airport.flights)
                .classed("highlight", false);

            d3.select("text#tooltip").style("visibility", "hidden");
        })
        .on("dblclick", function (d) {
            let toggle = d3.select(this).classed("voronoi-highlight");
            d3.select(this).classed("voronoi-highlight", !toggle);
        })
        .on("click", function (d) {
            let airport = d.properties.site.properties;
            let toggle = d3.select(airport.bubble).classed("clicked-highlight");
            d3.select(airport.bubble)
                .classed("clicked-highlight", !toggle);

            d3.selectAll(airport.flights)
                .classed("clicked-highlight", !toggle)
                .raise();

            document.getElementById('airport-name').innerText = airport.name;
            document.getElementById('airport-iata').innerText = airport.iata;
            document.getElementById('airport-city').innerText = airport.city;
            document.getElementById('airport-state').innerText = airport.state;
            document.getElementById('airport-country').innerText = airport.country;
            document.getElementById('airport-incoming').innerText = airport.incoming;
            document.getElementById('airport-outgoing').innerText = airport.outgoing;
            document.getElementById('airport-connections').innerText = airport.flights.length;
        });
}

function drawFlights(airports, flights) {

    let routes = generatePaths(flights);

    let line = d3.line()
        .x(airport => airport.x)
        .y(airport => airport.y);


    let links = svg.select("g#flights")
        .selectAll("path.flight")
        .data(routes)
        .enter()
        .append("path")
        .attr("d", line)
        .attr("class", "flight")
        .each(function (d) {
            d[0].flights.push(this);
        });

    const checkbox = document.querySelector("input[name=checkbox]");

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            svg.select("g#flights")
                .selectAll("path.flight")
                .style("stroke-width","1px");
        } else {
            svg.select("g#flights")
                .selectAll("path.flight")
                .style("stroke-width", "0px")
        }
    });
}


function generatePaths(routes) {
    let paths = [];

    routes.forEach(function (d, i) {
        paths.push([d.source, d.target]);
    });

    return paths;
}

function drawLegend() {
    svg.select("g#legend").append("circle").attr("cx", 100).attr("cy", 500).attr("r", 6).style("fill", "red");
    svg.select("g#legend").append("circle").attr("cx", 100).attr("cy", 525).attr("r", 6).style("fill", "yellow");
    svg.select("g#legend").append("circle").attr("cx", 100).attr("cy", 550).attr("r", 6).style("fill", "green");
    svg.select("g#legend").append("text").attr("x", 120).attr("y", 500).text("More than 100,000 flights").style("font-size", "15px").attr("alignment-baseline", "middle").style("fill", "white");
    svg.select("g#legend").append("text").attr("x", 120).attr("y", 525).text("More than 30,000 flights").style("font-size", "15px").attr("alignment-baseline", "middle").style("fill","white");
    svg.select("g#legend").append("text").attr("x", 120).attr("y", 550).text("Less than 30,000 flights").style("font-size", "15px").attr("alignment-baseline", "middle").style("fill", "white");
}

