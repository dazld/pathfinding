// util and node stuff
var util = require('util');
var fs = require('fs');
var helpers = require('./lib/helpers');
var Canvas = require('canvas');

var canvas = new Canvas(1280,800);
var ctx = canvas.getContext('2d');

var fs = require('fs')
  , out = fs.createWriteStream(__dirname + '/map.png')
  , stream = canvas.pngStream();

// constructor for location obj
var Location = require('./lib/Location');

// data
var locations = require('./data/places');
var routes = require('./index');

var TWOPI = Math.PI * 2;

var dims = {
	width: 1280,
	height: 800
};


var BinaryTree = require('./lib/binary-tree');

for (var route in routes){
	if (!routes.hasOwnProperty(route)) {
		continue;
	};

	var location = routes[route];

	ctx.fillStyle = 'rgba(32,32,32,0.5)';
	ctx.beginPath();
	ctx.arc(location.location.x, location.location.y, location.size, 0, Math.PI*2, true); 	
	ctx.closePath();
	ctx.font = '14px Helvetica Neue';
	
	ctx.fillText(route, location.location.x+location.size, location.location.y-location.size);

	for (var connection in location.connections){
		if (!location.connections.hasOwnProperty(connection)) {
			continue;
		};
		ctx.lineWidth = '0.5';
		ctx.strokeStyle = 'rgba(32,32,32,0.5)';
		ctx.moveTo(location.location.x, location.location.y);
		ctx.lineTo(routes[connection].location.x,routes[connection].location.y);
		ctx.stroke();

	}
	ctx.fill();
}



stream.on('data', function(chunk){
  out.write(chunk);
});

stream.on('end', function(){
  console.log('saved png');
});


module.exports = routes;