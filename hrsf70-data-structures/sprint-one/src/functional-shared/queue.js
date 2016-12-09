var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var temp = {};
  	temp.storage = {};

  	_.extend(temp, queueMethods);
  	return temp;
};

var queueMethods = {

	enqueue:function(value){ 
	    var index = Object.keys(this.storage).length;
	    if(this.storage.hasOwnProperty(index)){
	      this.storage[index+1] = value;  
	    }else{
	      this.storage[index] = value;
	    }
  	},

  	dequeue:function() {	
    var index = Object.keys(this.storage)[0];
    var dequeued=this.storage[index];
    delete this.storage[index];
    return dequeued;
  	},

	size:function() {
    return Object.keys(this.storage).length;
  },
};


