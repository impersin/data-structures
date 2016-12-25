

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};  // { nodes: }
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(val) {
  //TODO: handle value duplication and differentiation at some point
  //nodes are being overwritten each time addNode encounters a matching value
    var node = {};
    node.value = val;
    node.edges = [];     // collection;
    this.nodes[val] = node;
    //console.log(node); 
};                

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(val) {
  //console.log(this);
  if (this.nodes[val]) {
    return true;
  } else {
    return false;
  } 
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(val) {
  if (this.contains(val)){
    _.each(this.nodes[val].edges, function(edge) {
      this.removeEdge(edge, val);
    }, this);
    delete this.nodes[val];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var obj = this.nodes;
  if (_.contains(obj[fromNode].edges, toNode) && _.contains(obj[toNode].edges, fromNode)) {
    return true;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // for (var key in this.nodes) {
  //   //if (this.nodes[key].value === fromNode)
  //   this.nodes[key].
  // }
  this.nodes[fromNode].edges.push(toNode);
  this.nodes[toNode].edges.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var fromNodeId = this.nodes[fromNode].edges.indexOf(toNode);
  var toNodeId = this.nodes[toNode].edges.indexOf(fromNode);
  this.nodes[toNode].edges.splice(fromNodeId,1);
  this.nodes[fromNode].edges.splice(toNodeId,1);

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.nodes, function(node){
    cb(node.value);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


