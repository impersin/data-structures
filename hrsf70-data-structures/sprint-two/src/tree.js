var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  // your code here
  newTree.children = null;  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  if(!this.children){
    this.children = [];
    this.children.push(Tree(value));
  }else{
    this.children.push(Tree(value));
  }
};

treeMethods.contains = function(target) {
  var children = this.children //array
  console.log(children);
    function inner(child){
      var bool = false;
       for(var i = 0; i< child.length;i++){
          if(child[i].value === target){
              bool = true;
              console.log(bool);
              return bool;
          }else{
            if(child[i].children){
            inner(child[i].children);
            }
          }
       }
       console.log(bool)
       return bool;
    }

    return inner(children);
};

// var tree = newTree 

/*
 * Complexity: What is the time complexity of the above functions?
 */
