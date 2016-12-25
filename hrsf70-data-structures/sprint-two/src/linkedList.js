var LinkedList = function() {
  this.head = null;
  this.tail = null;
};

  LinkedList.prototype.addToTail = function(value) {
    // create a new tail.
    var newTail = new Node(value);
    // if there is no head.
    if(!this.head){
      //first newTail will be head & tail.
      this.head = newTail;
      //if there is a head, it means there is a tail already.
    }else{
      //newTail will be a new tail.
      //do not get confuse head and tail are reference of newTail instance!!!.
      this.tail.next = newTail; // == > this.head.next = newTail as well.!!
    }
    //new tail always will be assign to tail property.
    this.tail = newTail;
  };

  LinkedList.prototype.removeHead = function() {
     // store value before remove head.
      var temp = this.head.value;
      // next instance will be new head.
      this.head = this.head.next;
      //return removed head value.
      return temp;
  };

  LinkedList.prototype.contains = function(target) {
    var head = this.head;
    
    //create recoursion function.
      function traverse(node) {
        //check if first head value === target.
        if(node.value === target){
          //if it is return true'
          return true;
        }
        //if it is not check if there is tail object.
        if(node.next !== null){
          // if there is pass tail object as argument to recourse.
          return traverse(node.next);
        }else{
          //if there is no tail that mean there is value same as target.
          return false;
        }
      }
      //recoursion starts.
      return traverse(head)
  };


var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

// var LinkedList = function() {
//   var list = {};
//   list.head = null;
//   list.tail = null;

//   list.addToTail = function(value) {
//     var node = Node(value);
//       if(!list.head){
//         this.head = node; 
//       }else{
//         this.tail.next = node;
//       }
//         this.tail = node;
//     };

//   list.removeHead = function() {
//       var temp = this.head.value;
//       this.head=this.head.next;
//         return temp;
//   };

//   list.contains = function(target) {
//       var start = this.head;
//       while(start){
//         if(start.value === target){
//           return true;
//         }
//         start = start.next;
//       }
//       return false;
//   };
//   return list;
// };

// var Node = function(value) {
//   var node = {};

//   node.value = value;
//   node.next = null;

//   return node;
// };

/*
 * Complexity: What is the time complexity of the above functions?
 */
