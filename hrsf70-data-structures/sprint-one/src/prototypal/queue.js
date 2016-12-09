var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  	var temp=Object.create(queueMethods);
  	return temp;
};



	
var queueMethods = {
	enqueue:function(value){ 
	    var index = Object.keys(this).length;
	    if(this.hasOwnProperty(index)){
	      this[index+1] = value;  
	    }else{
	      this[index] = value;
	    }
  	},

  	dequeue:function() {	
	    var index = Object.keys(this)[0];
	    var dequeued=this[index];
	    delete this[index];
	    return dequeued;
	  	},

	size:function() {
    	return Object.keys(this).length;
  }
};


