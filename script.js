'use strict';
var PonyES5 = (function () {
			   
			    function P () {
				    var attributes = {
			                name: '',
			                breed: '',
			                age: '',
			                color: ''   
					   };

					this.set = function (key, value) {
                        
                        if (_isAllowedKeys(key, attributes)) {
                            attributes[key] = value;
                        };
					};

					this.get = function (key) {
                      
                        return attributes[key];
					};
                }

			    function _isAllowedKeys (key, obj) {
			    	var keys = Object.keys(obj),
			    	    flag;
                    
                    if (keys.indexOf(key) != -1) {
                        flag = true;  
                    } else {
                    	flag = false;
                    }
			    	return flag;

			    }

			    function _isWorkingHours () {
			    	var currentTime = new Date(),
			    	    hours = currentTime.getHours(),
			    	    directive;

			    	if (hours > 8 && hours < 18) {

			    		return directive = 'Work!'
			    	} else {

			    		return directive = 'Walk!'
			    	}
			    }

			    function _walk () {

					return console.log(this.get('name') + ' walks');
				}

				function _eatsGrass () {

					return console.log('Pony eats grass');
				}

				function _work () {
					return console.log(this.get('name') + ' works');
				}

			    function _status () {
					var status = _isWorkingHours ();

					if (status === 'Work!'){
						_work.call(this);
					} else {
						_walk.call(this);
					}
				}
				
			    P.prototype.isAllowedKey = _isAllowedKeys;
			    P.prototype.isWorkingHours = _isWorkingHours;
			    P.prototype.walk = _walk;
			    P.prototype.eatsGrass = _eatsGrass;
			    P.prototype.work = _work;
			    P.prototype.status = _status;

console.dir(P);
			    return P;
            })();

var ponyES5 = new PonyES5();
ponyES5.set('name', 'Koral');
console.log(ponyES5.get('name'));
ponyES5.walk();
ponyES5.status();

class Pony {
    constructor() {
	    var attributes = {
				name: '',
			    breed: '',
			    age: '',
			    color: ''  
			};

	    
		this.set = function (key, value) {

	        if (this.isAllowedKeys(key, attributes)) {
	            attributes[key] = value;
	        };
		};

		this.get = function (key) {
	                      
	        return attributes[key];
		};

	}
    isAllowedKeys (key, obj) {
		    var keys = Object.keys(obj),
				flag;
	                    
	        if (keys.indexOf(key) != -1) {
	            flag = true;  
	        } else {
	            flag = false;
	        }

			return flag;
	}

    isWorkingHours () {
		var currentTime = new Date(),
			hours = currentTime.getHours(),
			directive;

		if (hours > 8 && hours < 18) {

			return directive = 'Work!'
		} else {

			return directive = 'Walk!'
		}
	}

	walk () {

		return console.log(this.get('name') + ' walks');
	}

	eatsGrass () {

		return console.log(this.get('name') + ' eats grass');
	}

	work () {
		return console.log(this.get('name') + ' works');
	}

	status () {
		var status = this.isWorkingHours ();

		if (status === 'Work!'){
			this.work();
		} else {
			this.walk();
		}
	}
	
}
console.dir(Pony);
let pony = new Pony();
pony.set('name', 'Koral');
console.log(pony.get('name'));
pony.status();