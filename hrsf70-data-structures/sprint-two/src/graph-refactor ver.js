

// Instantiate a new graph
var Graph = function() {
	this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(val) {
	var node = {};           
	node.value = val;
	node.edges = [];
	this.nodes[val] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(val) {
	return _.contains(this.nodes[val], val);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(val) {
	var nodes = this.nodes

	_.each(nodes, function(node, key){
		var index = node.edges.indexOf(val);
		node.edges.splice(index, 1);
	});
	
	delete this.nodes[val];	

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
	var nodes = this.nodes;
	var temp =(_.contains(nodes[fromNode].edges, toNode) && _.contains(nodes[toNode].edges, fromNode));
	return temp;	
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
	var nodes = this.nodes;
	nodes[fromNode].edges.push(toNode);
	nodes[toNode].edges.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
	var nodes = this.nodes;
	
	var fromNodeId = nodes[fromNode].edges.indexOf(toNode);
	var toNodeId = nodes[toNode].edges.indexOf(fromNode);
	nodes[fromNode].edges.splice(toNodeId, 1);
	nodes[toNode].edges.splice(fromNodeId, 1);



};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
	var nodes = this.nodes;
	_.each(nodes, function(node, key){
		cb(Number(key));
	});
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


