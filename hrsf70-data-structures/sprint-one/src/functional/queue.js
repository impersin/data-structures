var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var index = Object.keys(storage).length;
    if(storage.hasOwnProperty(index)){
      storage[index+1] = value;  
    }else{
      storage[index] = value;
    }
  };

  someInstance.dequeue = function() {
    var index = Object.keys(storage)[0]; // [ (1) ,2,3,4,] 
    var dequeued=storage[index];
      
    delete storage[index];
    return dequeued;
  };

  someInstance.size = function() {
      //console.log(Object.keys(storage).length);
    return Object.keys(storage).length;
  };

  return someInstance;
};
