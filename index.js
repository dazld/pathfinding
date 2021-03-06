// util and node stuff
var util = require('util');
var fs = require('fs');
var helpers = require('./lib/helpers');

// data
var locations = require('./data/places');

// constructor for location obj
var Location = require('./lib/Location');

// start locations

var routes = {};

var addLocation = function(name, paths) {

	var location;

	if (name instanceof Location) {
		location = name;
		name = location.name;
	} else {
		location = new Location(name);
	}


	var numConnections = helpers.randomInt(Math.floor(locations.length / 3), true);
	var connections = helpers.randomMembers(numConnections, name, locations);
	

	connections.forEach(function(item) {

		var distance = null;

		if (routes[item] && routes[item].getConnection(name)) {
			distance = routes[item].getConnection(name);
		} else {
			distance = helpers.randomInt(10, true);

			if (!routes[item]) {
				routes[item] = new Location(item);
			}
			distance = Math.floor(location.getDistance(routes[item].location.x,routes[item].location.y));
			routes[item].addConnection(name, distance);

		}

		location.addConnection(item, distance);


	});


	return location;
};



locations.forEach(function(loc) {
	if (!routes[loc]) {
		routes[loc] = addLocation(loc);
	} else {
		routes[loc] = addLocation(routes[loc]);
	}

});

// console.dir(routes);
fs.writeFileSync(__dirname + '/data/out.json', JSON.stringify(routes, null, 4));


module.exports = routes;