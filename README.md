# FlightRouteTracker

Background
FlightRouteTracker is a Data Visualization Tool of Domestic Flights connecting airports all around the United States of America. It provides a visual aid of connecting routes through lines connecting the ports. Through selecting a specific destination and departure airport , one would be able to view the routes that are possible to achieve that destination.

Functionality & MVPs
Users Will be able to:

View all available routes from a selected airport to any destination without stops.
View all routes nonstop and 1 stop from one airport to another
View color coded airports based on number of routes available
View a map with accurate geolocation of airports

Wireframes
![Alt text](/FlightRouteTracker/Image 12-3-21 at 2.17 AM.jpeg?raw=true "Wireframe")

Nav links include links to this project's Github repo, my LinkedIn and AngelList, and the About modal.
Map UI will be clikable on  all airports
The side customization bar will allow choosing of airports

Technologies, Libraries, APIs
This project will be implemented with the following technologies:

The Canvas API to render the map
Webpack and Babel to bundle and transpile the source JavaScript code
npm to manage project dependencies
D3 Library to implement the map and access airports API
AviationStack and Airport API to acquire routes and airport geolocation

Implementation Timeline
NB:

Friday Afternoon & Weekend: Setup project, Get map to show up on screen with grid setup and probably tag airport locations

Monday: Use draw techniques and connect API to get possible routes to connect airports through connecting lines

Tuesday: Implement connection algorithm with DFS search and then portray that route on map

Wednesday: Finish implementing user controls, and focus on styling, as well as implementing the different color schemes and nav links. If time, start on bonuses.ocus on styling of website and making it look more dynamic and finish any incomplete features

Thursday Morning: Deploy to GitHub pages. If time, rewrite this proposal as a production README.
