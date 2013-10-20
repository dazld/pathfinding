

var Location = function(name, x, y){
	this.name = name;
	this.location = {
		x: x || Math.floor(Math.random()*100),
		y: y || Math.floor(Math.random()*100)
	};
	this.connections = {};
};

Location.prototype.addConnection = function(name, distance){
	this.connections[name] = distance;
};

Location.prototype.getConnection = function(name){
	return this.connections[name] || false;
};


Location.prototype.getConnections = function() {
	return this.connections;
};


module.exports = Location;