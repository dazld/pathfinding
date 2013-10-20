

var Location = function(name){
	this.name = name;
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