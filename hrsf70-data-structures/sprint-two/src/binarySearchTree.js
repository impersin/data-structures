var BinarySearchTree = function(value) {
  var tree = Object.create(BinarySearchTree.prototype);
    tree.value = value;
    tree.left;
    tree.right;

    return tree;
};

BinarySearchTree.prototype.insert = function(value) {
  // create a new tree with value
  var newTree = new BinarySearchTree(value);
    // and iterate through tree branch 
    function traverse(tree){
  // compare first tree value and if new tree value is greater than existirng tree
  //value than assign new tree to right or left.
      if(tree.value > value) {
        if(tree.left === undefined) {
          tree.left = newTree;
        }else{
          traverse(tree.left);
        }
      }else{
        if(tree.right === undefined) {
          tree.right = newTree;
        }else{
          traverse(tree.right);
        }
      }
    }

    // recursion start.
      traverse(this);

}

BinarySearchTree.prototype.contains = function(target) {
  var start = this;
  // do not forget to use return the value when you need a return value from recursion!!!!
  function traverse(tree){
    if(tree.value === target){
     return true; //<---  
    }

    if(target < tree.value) {
      if(tree.left !== undefined) {
        return traverse(tree.left); //<---
      }else{
        return false; //<---
      }
    }else{
      if(tree.right !== undefined){
        return traverse(tree.right); //<---
      }else{
        return false; //<---
      }
    }
  }
  return traverse(start); //<---
}

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  
  function traverse(tree) {
    if(tree.value){
      callback(tree.value);
    }

    if(tree.left !== undefined) {
      traverse(tree.left);
    }

    if(tree.right !== undefined){
      traverse(tree.right);
    }

  }

  traverse(this);
}
/*
 * Complexity: What is the time complexity of the above functions?
 */
