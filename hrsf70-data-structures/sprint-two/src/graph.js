// Instantiate a new graph
var Graph = function() {

};


// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if(this[node]){
    return true;
  }else{
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if(this.contains(node)){
    this[node].forEach(function(ele){
      this.removeEdge(ele, node);
    },this);
  }

  delete this[node];
    
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this[fromNode].indexOf(toNode) > -1 && this[toNode].indexOf(fromNode) > -1
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode].push(toNode);
  this[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var toNodeIdx = this[fromNode].indexOf(toNode);
  var fromNodeIdx = this[toNode].indexOf(fromNode);
  this[fromNode].splice(toNodeIdx, 1);
  this[toNode].splice(fromNodeIdx, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for(var props in this){
    if(Array.isArray(this[props])){
      cb(parseInt(props));
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
