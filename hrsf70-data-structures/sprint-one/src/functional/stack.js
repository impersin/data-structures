var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {}; //{ 0:"a"}

  // Implement the methods below
  someInstance.push = function(value) {
    var number = Object.keys(storage).length;
      storage[number] = value;
  };

  someInstance.pop = function() {
    var number = Object.keys(storage).length - 1;//storage key start with 0;
    var popped = [];
    popped.push(storage[number]);
    delete storage[number];
    return popped[0];
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
