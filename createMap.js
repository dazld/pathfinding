// util and node stuff
var util = require('util');
var fs = require('fs');
var helpers = require('./lib/helpers');

// constructor for location obj
var Location = require('./lib/Location');

// data
var locations = require('./data/places');
var routes = {};

var TWOPI = Math.PI * 2;

var dims = {
	width: 100,
	height: 100
};





module.exports = routes;