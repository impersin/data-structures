var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
      if(!list.head){
        this.head = node; 
      }else{
        this.tail.next = node;
      }
        this.tail = node;
    };

  list.removeHead = function() {
      var temp = this.head.value;
      this.head=this.head.next;
        return temp;
  };

  list.contains = function(target) {
      var start = this.head;
      while(start){
        console.log(start);
        if(start.value === target){
          return true;
        }
        start = start.next;
      }
      return false;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */