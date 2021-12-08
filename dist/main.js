/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("var url = \"https://gist.githubusercontent.com/milafrerichs/78ef5702db2dc514fc2bed465d58406b/raw/f1366ee2a83a9afb1dd2427e9cbd4cd3db8d87ca/bundeslaender_simplify200.geojson\";\nd3.json(url).then(function (bb) {\n  var bbox = d3.select('body').node().getBoundingClientRect();\n  var width = window.innerWidth;\n  var height = window.innerHeight;\n  var projection = d3.geoEqualEarth();\n  projection.fitExtent([[20, 20], [width, height]], bb);\n  var geoGenerator = d3.geoPath().projection(projection);\n  var svg = d3.select(\"body\").append('svg').style(\"width\", \"100%\").style(\"height\", \"100%\");\n  svg.append('g').selectAll('path').data(bb.features).enter().append('path').attr('d', geoGenerator).attr('fill', '#088').attr('stroke', '#000');\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9GbGlnaHRSb3V0ZVRyYWNrZXIvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6WyJ1cmwiLCJkMyIsImpzb24iLCJ0aGVuIiwiYmIiLCJiYm94Iiwic2VsZWN0Iiwibm9kZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwicHJvamVjdGlvbiIsImdlb0VxdWFsRWFydGgiLCJmaXRFeHRlbnQiLCJnZW9HZW5lcmF0b3IiLCJnZW9QYXRoIiwic3ZnIiwiYXBwZW5kIiwic3R5bGUiLCJzZWxlY3RBbGwiLCJkYXRhIiwiZmVhdHVyZXMiLCJlbnRlciIsImF0dHIiXSwibWFwcGluZ3MiOiJBQUFBLElBQUlBLEdBQUcsR0FBRyxpS0FBVjtBQUNBQyxFQUFFLENBQUNDLElBQUgsQ0FBUUYsR0FBUixFQUFhRyxJQUFiLENBQWtCLFVBQVVDLEVBQVYsRUFBYztBQUM1QixNQUFJQyxJQUFJLEdBQUdKLEVBQUUsQ0FBQ0ssTUFBSCxDQUFVLE1BQVYsRUFBa0JDLElBQWxCLEdBQXlCQyxxQkFBekIsRUFBWDtBQUNBLE1BQUlDLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxVQUFuQjtBQUNBLE1BQUlDLE1BQU0sR0FBR0YsTUFBTSxDQUFDRyxXQUFwQjtBQUNBLE1BQUlDLFVBQVUsR0FBR2IsRUFBRSxDQUFDYyxhQUFILEVBQWpCO0FBQ0FELEVBQUFBLFVBQVUsQ0FBQ0UsU0FBWCxDQUFxQixDQUFDLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FBRCxFQUFXLENBQUNQLEtBQUQsRUFBUUcsTUFBUixDQUFYLENBQXJCLEVBQWtEUixFQUFsRDtBQUNBLE1BQUlhLFlBQVksR0FBR2hCLEVBQUUsQ0FBQ2lCLE9BQUgsR0FBYUosVUFBYixDQUF3QkEsVUFBeEIsQ0FBbkI7QUFDQSxNQUFJSyxHQUFHLEdBQUdsQixFQUFFLENBQUNLLE1BQUgsQ0FBVSxNQUFWLEVBQWtCYyxNQUFsQixDQUF5QixLQUF6QixFQUNMQyxLQURLLENBQ0MsT0FERCxFQUNVLE1BRFYsRUFFTEEsS0FGSyxDQUVDLFFBRkQsRUFFVyxNQUZYLENBQVY7QUFHQUYsRUFBQUEsR0FBRyxDQUFDQyxNQUFKLENBQVcsR0FBWCxFQUFnQkUsU0FBaEIsQ0FBMEIsTUFBMUIsRUFDS0MsSUFETCxDQUNVbkIsRUFBRSxDQUFDb0IsUUFEYixFQUVLQyxLQUZMLEdBR0tMLE1BSEwsQ0FHWSxNQUhaLEVBSUtNLElBSkwsQ0FJVSxHQUpWLEVBSWVULFlBSmYsRUFLS1MsSUFMTCxDQUtVLE1BTFYsRUFLa0IsTUFMbEIsRUFNS0EsSUFOTCxDQU1VLFFBTlYsRUFNb0IsTUFOcEI7QUFPSCxDQWpCRCIsInNvdXJjZXNDb250ZW50IjpbInZhciB1cmwgPSBcImh0dHBzOi8vZ2lzdC5naXRodWJ1c2VyY29udGVudC5jb20vbWlsYWZyZXJpY2hzLzc4ZWY1NzAyZGIyZGM1MTRmYzJiZWQ0NjVkNTg0MDZiL3Jhdy9mMTM2NmVlMmE4M2E5YWZiMWRkMjQyN2U5Y2JkNGNkM2RiOGQ4N2NhL2J1bmRlc2xhZW5kZXJfc2ltcGxpZnkyMDAuZ2VvanNvblwiO1xuZDMuanNvbih1cmwpLnRoZW4oZnVuY3Rpb24gKGJiKSB7XG4gICAgdmFyIGJib3ggPSBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICB2YXIgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB2YXIgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIHZhciBwcm9qZWN0aW9uID0gZDMuZ2VvRXF1YWxFYXJ0aCgpO1xuICAgIHByb2plY3Rpb24uZml0RXh0ZW50KFtbMjAsIDIwXSwgW3dpZHRoLCBoZWlnaHRdXSwgYmIpO1xuICAgIHZhciBnZW9HZW5lcmF0b3IgPSBkMy5nZW9QYXRoKCkucHJvamVjdGlvbihwcm9qZWN0aW9uKTtcbiAgICB2YXIgc3ZnID0gZDMuc2VsZWN0KFwiYm9keVwiKS5hcHBlbmQoJ3N2ZycpXG4gICAgICAgIC5zdHlsZShcIndpZHRoXCIsIFwiMTAwJVwiKVxuICAgICAgICAuc3R5bGUoXCJoZWlnaHRcIiwgXCIxMDAlXCIpO1xuICAgIHN2Zy5hcHBlbmQoJ2cnKS5zZWxlY3RBbGwoJ3BhdGgnKVxuICAgICAgICAuZGF0YShiYi5mZWF0dXJlcylcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5hdHRyKCdkJywgZ2VvR2VuZXJhdG9yKVxuICAgICAgICAuYXR0cignZmlsbCcsICcjMDg4JylcbiAgICAgICAgLmF0dHIoJ3N0cm9rZScsICcjMDAwJyk7XG59KTsiXSwiZmlsZSI6Ii4vc3JjL2luZGV4LmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9GbGlnaHRSb3V0ZVRyYWNrZXIvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;