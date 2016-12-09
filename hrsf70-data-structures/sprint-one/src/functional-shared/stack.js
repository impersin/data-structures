var Stack = function() {

  //var someInstance = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var temp={}
  temp.storage={};

   _.extend(temp, stackMethods) 
  	return temp;
};



var stackMethods = {
	push:function(value) {
	    var number = Object.keys(this.storage).length;
	      this.storage[number] = value;
    },

  pop:function() {
	    var number = Object.keys(this.storage).length - 1;
	    var popped = [];
	    popped.push(this.storage[number]);
	    delete this.storage[number];
	    return popped[0];
	},

  size:function() {
	 return Object.keys(this.storage).length;
  }

}


