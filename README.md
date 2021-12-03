# FlightRouteTracker #

## Background ##

FlightRouteTracker is a Data Visualization Tool of Domestic Flights connecting airports all around the United States of America. It provides a visual aid of connecting routes through lines connecting the ports. Through selecting a specific destination and departure airport , one would be able to view the routes that are possible to achieve that destination.

The Map and Visual Aid will provide an immersive UI to users to select different flight options and also visually view the avilable locations that one could fly to from one specific airport along with connections available in a 24 hour window. 

## Functionality & MVPs ##

Users Will be able to:

* View all available routes from a selected airport to any destination without stops.
* View all routes nonstop and 1 stop from one airport to another.
* View color coded airports based on number of routes available.
* View a map with accurate geolocation of airports.



## Wireframes ##

![Alt text](https://github.com/skvisshal/FlightRouteTracker/blob/main/Image%2012-3-21%20at%202.17%20AM.jpeg?raw=true "Wireframe")

![Alt text](https://github.com/skvisshal/FlightRouteTracker/blob/main/RouteMap.svg?raw=true "Sample Map")

* Nav links include links to this project's Github repo, my LinkedIn.
* Map UI will be clikable on  all airports.
* The side customization bar will allow choosing of airports including destination and departure.
* The legend will show the color legend for airport styling and route colors.
* The text box will provide information on the route including time, airlines and connection times.

## Technologies, Libraries, APIs ##

This project will be implemented with the following technologies:

* The Canvas API to render the map.
* Webpack and Babel to bundle and transpile the source JavaScript code.
* npm to manage project dependencies.
* D3 Library to implement the map and access airports API.
* AviationStack and Airport API to acquire routes and airport geolocation.

## Implementation Timeline ##


* ### Friday Afternoon & Weekend: ### 
  * Setup project.
  * Get map to show up on screen with grid setup.
  * tag airport locations to the map using coordinates and IATA JSON API.

* ### Monday: ### 
  * Use draw techniques and connect API to get possible routes to connect airports through connecting lines.
  * Use D3 methods to make the airports show up as a circle with different colors based on airport frequency.
  * Have routes with different colors to distinguish them between each other.

* ### Tuesday: ### 
  *  Implement connection algorithm with DFS search and then portray that route on map.
  *  Have routes connecting to a intermittent airport and then make the destination.
  *  make sure connections are within 24 hours for options.

* ### Wednesday: ### 
  * Finish implementing user controls.
  * Focus on styling.
  * Implementing the different color schemes and nav links.
  * Focus on styling of website and making it look more dynamic.
  * Finish any incomplete features.

* ### Thursday Morning: ### 
  * Deploy to GitHub pages. 
  * If time, rewrite this proposal as a production README.
