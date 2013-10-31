var BinaryTree = function() {
	this._root = null;
};

BinaryTree.prototype.add = function(value) {
	var node = {
		value: value,
		left: null,
		right: null
	};
	var current;

	if (this._root === null) {
		this._root = node;
	} else {

		while (true) {

			current = this._root;

			if (value < current.value) {
				if (current.left === null) {
					current.left = node;
					break;
				} else {
					current = current.left;
				}

			} else if (value > current.value) {
				if (current.right === null) {
					current.right = node;
					break;
				} else {
					current = current.right;
				}
			} else {
				break;
			}

		}

	}

};
BinaryTree.prototype.remove = function(value) {
	var found = false;
	var parent = null;
	var current = this._root;
	var childCount;
	var replacement;
	var replacementParent;

	while (!found && current) {
		if (value < current.value) {
			parent = current;
			current = current.left;
		} else if (value > current.value) {
			parent = current;
			current = current.right;
		} else {
			found = true;
		}

		if (found) {
			childCount = (current.left !== null ? 1 : 0) + (current.right !== null ? 1 : 0);
			if (current === this._root) {
				switch (childCount) {
					case 0:
						this._root = null;
						break;
					case 1:
						this._root = (current.right === null ? current.left : current.right);
						break;
					case 2:
						// 
						break;
				}
			} else {
				switch(childCount){
					case 0:
						if (current.value < parent.value) {
							parent.left = null;
						} else {
							parent.right = null;
						}
						break;
					case 1:
						if (current.value < parent.value) {
							parent.left = (current.left === null ? current.right : current.left);
						} else {
							parent.right = (current.left === null ? current.right : current.left);
						}
						break;
					case 2:
						break;
				}
			}
		};
	}
};
BinaryTree.prototype.contains = function(value) {
	var found = false;
	var current = this._root;

	while (!found && current) {
		if (value < current.value) {
			current = current.left;
		} else if (value > current.value) {
			current = current.right;
		} else {
			found = true;
		}
	}

	return found;
};
BinaryTree.prototype.traverse = function(process) {

	function inOrder(node) {
		if (node) {
			if (node.left !== null) {
				inOrder(node.left)
			}

			process.call(this, node);

			if (node.right !== null) {
				inOrder(node.right);
			};

		};
	}

	inOrder(this._root);

};
BinaryTree.prototype.size = function() {
	var size = 0;

	this.traverse(function(node) {
		size++;
	});

	return size;
};

BinaryTree.prototype.toArray = function() {
	var results = [];

	this.traverse(function(node) {
		results.push(node.value);
	});

	return results;
};

BinaryTree.prototype.toString = function() {
	return this.toArray().toString();
};

module.exports = BinaryTree;