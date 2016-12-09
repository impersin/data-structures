var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
 //this
};

	Stack.prototype.push=function(value) {
	    var number = Object.keys(this).length;
	      this[number] = value;
    },

    Stack.prototype.pop=function() {
	    var number = Object.keys(this).length - 1;
	    var popped = [];
	    popped.push(this[number]);
	    delete this[number];
	    return popped[0];
	},

    Stack.prototype.size=function() {
		return Object.keys(this).length;
  	}
