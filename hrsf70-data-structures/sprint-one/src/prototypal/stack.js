var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var temp=Object.create(stackMethods);
  
  return temp;
};

var stackMethods = {

	push:function(value) {
	    var number = Object.keys(this).length;
	      this[number] = value;
    },

    pop:function() {
	    var number = Object.keys(this).length - 1;
	    var popped = this[number];
	    delete this[number];
	    return popped;
	},

    size:function() {
		return Object.keys(this).length;
  }

};


