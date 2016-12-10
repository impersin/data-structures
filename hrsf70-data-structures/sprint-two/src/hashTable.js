

var HashTable = function() {
  this._limit = 8;
  this._storage = [] //LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var temp = [k,v];
  this._storage[index] = [temp];
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  console.log(this._storage);
  if (this._storage[index]) {
    return this._storage[index][1];
  } else {
    return undefined;
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.splice(index, 1);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


