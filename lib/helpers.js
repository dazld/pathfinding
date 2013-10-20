var helpers = {
	randomInt: function(max, normalized) {

		var val = Math.floor(Math.random() * max);
		if (normalized) {
			val = val + 1;
		};

		return val;
	},
	randomMembers: function(qty, ignore, original) {
		
		var startItems = original.filter(function(item) {
			return item !== ignore;
		});

		var _ret = [];

		while (qty && startItems.length) {
			var idx = this.randomInt(startItems.length, true) - 1;
			_ret.push(startItems.splice(idx, 1)[0])
			qty--;
		};

		return _ret;
	}
};


module.exports = helpers;