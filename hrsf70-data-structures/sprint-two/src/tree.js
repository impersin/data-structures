
var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

    _.extend(newTree, treeMethods); 
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var tree = new Tree(value);
  this.children.push(tree);
};

treeMethods.contains = function(target) {
    var tree = this;
    //console.log(this);
    var result = false;
    function traverse(node) {
      if(node.value === target) {
        result = true;
      }else if(node.children){
        for(var  i = 0; i < node.children.length; i++) {
          var child = node.children[i];
          traverse(child);
        }
      }
    }
      traverse(tree);
    return result;
};

// treeMethods.contains = function(target) {
//     var parent = this;

//       if(parent.value === target) {
//         return true;
//       }

//       for(var  i = 0; i < parent.children.length; i++) {
//         var child = parent.children[i];
//           if( child.contains(target)) {
//             return true;
//           }
            
//       }

//       return false;
// };