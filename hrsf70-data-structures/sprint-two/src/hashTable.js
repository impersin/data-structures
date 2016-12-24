

var HashTable = function() {
  this._limit = 8;
  this._storage =LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  //create a bucket with index if the bucket doesn't exist;
  var bucket = this._storage.get(index) || [];
    // create a sub array as tuple. and insert to bucket.
    bucket.push([k,v]);

    //iterate it the bucket we got it from get method, if there is a tuple
    // has same key, overwrite the value.
      for(var i = 0; i < bucket.length; i++) {
        var tuple = bucket[i];
        if(tuple[0] === k) {
          tuple[1] = v;
        }
      }
    
    
    //and use set method to assign bucket inside of hashTable.
    this._storage.set(index,bucket);

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];

    for(var i = 0; i < bucket.length; i++){
      var tuple = bucket[i];
      if(tuple[0] === k) {
        return tuple[1];
      }
    }

    return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];

    for(var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if(tuple[0] === k) {
        bucket.splice(i, 1);
      }
    }
    return undefined;    
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


