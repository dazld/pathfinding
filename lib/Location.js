

var Location = function(name, x, y, size){
	this.name = name;
	this.size = size || Math.floor(Math.random()*50)+10;
	this.location = {
		x: x || Math.floor(Math.random()*1280),
		y: y || Math.floor(Math.random()*800)
	};
	this.connections = {};
};

Location.prototype.addConnection = function(name, distance){
	this.connections[name] = distance;
};

Location.prototype.getConnection = function(name){
	return this.connections[name] || false;
};

Location.prototype.getDistance = function(x,y){
	var dx = this.location.x - x;
	var dy = this.location.y - y;
	return Math.sqrt((dx*dx)+(dy*dy));
};

Location.prototype.getConnections = function() {
	return this.connections;
};


module.exports = Location;