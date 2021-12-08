
const width = window.innerWidth,
  height = window.innerHeight;

const projection = d3.geoAlbers()
  .scale(1300)
  .translate([487.5, 305]);

const svg = d3.select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

d3.json("../data/states-albers-10m.json").then(function (error, us) {
  if (error) throw error;


  svg.append("path")
    .datum(topojson.merge(us, us.objects.states.geometries.filter(d => d.id !== "02" && d.id !== "15")))
    .attr("fill", "#ddd")
    .attr("d", d3.geoPath());

  svg.append("path")
    .datum(topojson.mesh(us, us.objects.states, (a, b) => a !== b))
    .attr("fill", "none")
    .attr("stroke", "white")
    .attr("stroke-linejoin", "round")
    .attr("d", d3.geoPath());
});