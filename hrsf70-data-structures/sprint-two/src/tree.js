var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods)

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
    this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var children = this; //array
  var bool = false;
  function inner(child){
    if(child.value === target){
      bool = true;
    }else if(child.children){
      for(var i = 0; i< child.children.length;i++){
        inner(child.children[i]);
      }
    }
  }
  inner(children);
  return bool;
};


// var tree = newTree 

/*
 * Complexity: What is the time complexity of the above functions?
 */
