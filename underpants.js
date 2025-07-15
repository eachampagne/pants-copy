// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value) {
	//return the value as is
	return value;
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value) {
	//check if value is an object
	if (typeof value !== "object") {
		//takes care of number, string, boolean, undefined, and function
		return typeof value;
	} else { //values of type "object" need special treatment
		if (value === null) { //check if value is null
			return "null";
		} else if (Array.isArray(value)) { //check if value is an array
			return "array";
		} else if (value instanceof Date) { //check if value is a date
			return "date";
		} else { //once we've ruled out all the special cases, return "object"
			return "object";
		}
	}
}

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array, num) {
	//check if array isn't actually an array
	if (!Array.isArray(array)) {
		//if not, return an empty array
		return [];
	} else {
		//may have to adjust the number of elements to return from the provided number, but the input num is the starting point
		let numToReturn = num;
		//if num wasn't provided or isn't a number, will return the first element of the array
		if (!num || typeof num !== "number") {
			numToReturn = 1;
		//if the provided num is negative, will return an empty array
		} else if (num < 0) {
			numToReturn = 0;
		}
		//make certain we don't try to return more elements than we actually have
		if (numToReturn > array.length) {
			numToReturn = array.length;
		}
		
		//return statements

		//special case - if only one element is to be returned, return it as itself rather than wrapped in an array
		if (numToReturn === 1) {
			return array[0]; 
		} else { //otherwise, use slice to access the first elements of the array, using the adjusted to-return value
			//if no elements are to be returned, this will return an empty array
			return array.slice(0, numToReturn);
		}
	}
}

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(array, num) {
	//the part about deciding how many elements to return is exactly the same as in _.first(), the only difference is which elements
	
	//check if array isn't actually an array
	if (!Array.isArray(array)) {
		//if not, return an empty array
		return [];
	} else {
		//may have to adjust the number of elements to return from the provided number, but the input num is the starting point
		let numToReturn = num;
		//if num wasn't provided or isn't a number, will return the last element of the array
		if (!num || typeof num !== "number") {
			numToReturn = 1;
		//if the provided num is negative, will return an empty array
		} else if (num < 0) {
			numToReturn = 0;
		}
		//make certain we don't try to return more elements than we actually have
		if (numToReturn > array.length) {
			numToReturn = array.length;
		}
		
		//return statements

		//special case - if only one element is to be returned, return it as itself rather than wrapped in an array
		if (numToReturn === 1) {
			return array[array.length - 1]; 
		} else { //otherwise, use slice to access the first elements of the array, using the adjusted to-return value
			//if no elements are to be returned, this will return an empty array
			return array.slice(array.length - numToReturn);
		}
	}
}

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(array, value) {
	//loop through array
	for (let i = 0; i < array.length; i++) {
		//check if each element is the target value
		if (array[i] === value) {
			//if so, return the index. This will only find the first occurrence of value because the function exits upon the first occurance
			return i;
		}
	}
	//if the loop finished without finding a match, return -1
	return -1;
}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

//TODO: edge case with no value. I assume the function as written will just treat it like undefined and look for undefined in the array (which could appear, I suppose) but I don't know if that's the correct behavior. I think in this case it would make more sense for the function to throw an error if it doesn't get the arguments it expects than to silently search for undefined.
_.contains = function(array, value) {
	/* Normal implementation:
	//loop through array
	for (let i = 0; i < array.length; i++) {
		//check if each element is the target value
		if (array[i] === value) {
			//if so, return true
			return true;
		}
	}
	//if the loop finished without finding a match, return false
	return false;
	*/

	//using the ternary operator
	return _.indexOf(array, value) !== -1 ? true : false;
}

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, func) {
	//check if collection is an array
	if (Array.isArray(collection)) {
		//loop over the array
		for (let i = 0; i < collection.length; i++) {
			//invoke the callback function and pass each element, its index, and the whole array
			func(collection[i], i, collection);
		}
	} else { //if not, assume it's an object
		for (let key in collection) {
			//invoke the callback and pass each key/value pair and the whole object
			func(collection[key], key, collection);
		}
	}
}

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(array) {
	//initialize empty array to store unique values
	let uniques = [];

	//loop over the input array
	for (let i = 0; i < array.length; i++) {
		//use indexOf() to check whether this element already exists in uniques
		if (_.indexOf(uniques, array[i]) === -1) {
			//if not, add it. If so, skip the element
			uniques.push(array[i]);
		}
	}

	//return uniques
	return uniques;
}

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(array, testFunc) {
	//declare empty array to store results
	let returnArr = [];
	
	//Solution that uses _.each() to complete the bonus objective
	//The anonymous callback function passed to each() can access the testFunc and the returnArr because they are in its outer scope
	//I would never have thought to write this function like this if I weren't trying to use each
	//see _.reject to see the for-loop approach that is more intuitive to me
	_.each(array, (elem, i, arr) => {
		if (testFunc(elem, i, arr)) returnArr.push(elem);
	});

	//return results
	return returnArr;
}

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, testFunc) {
	//declare empty array to store results
	let returnArr = [];

	//loop over the input array
	for (let i = 0; i < array.length; i++) {
		//check if each element *fails* the test
		if (!testFunc(array[i], i, array)) {
			//only add it to the results array if it fails
			returnArr.push(array[i]);
		}
	}

	//return results
	return returnArr;
}

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(array, func) {
	//you could use _.filter() and _.reject() to get the two sub arrays, but that results in iterating over the input array twice.
	//it's better to rewrite the loop (or in this case, use _.each()) and only iterate once
	
	//initialize two empty arrays to store elements that pass and that fail
	let passed = [];
	let failed = [];

	//use _.each() to apply the test function to each element in the array
	_.each(array, (elem, i, array) => {
		//the result of the test function determines which array to push the element to
		func(elem, i, array) ? passed.push(elem) : failed.push(elem);
	});


	//return an array of the passed and failed arrays
	return [passed, failed];
}

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, func) {
	//initialize empty array to store results
	let returnArr = [];

	//check if the input collection is an array
	if(Array.isArray(collection)) {
		//loop over the array
		for (let i = 0; i < collection.length; i++) {
			//apply the function to each element in the array, then save in the results array
			//callback function also takes the index and the entire collection
			returnArr.push(func(collection[i], i, collection));
		}
	} else {
		//if the imput is not an array, we can assume it's a normal object.
		//Any other types will just bypass the for loop and return an empty array since they won't have keys 
		//loop over the keys in the object
		for (let key in collection) {
			//apply to function to each key/value pair in the array, then save in the result array
			//callback function takes value, key, and the entire collection
			returnArr.push(func(collection[key], key, collection));
		}
	}

	//return results
	return returnArr;
}

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(array, prop) {
	//use _.map() to create array of values, then return the array
	//Map's callback function is an anonymous function that takes an object and returns the value corresponding to prop on that object
	return _.map(array, (elem) => elem[prop]);
}

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(collection, func) {
	//check if collection is an array
	if (Array.isArray(collection)) {
		//check if function exists
		if (!func) {
			//if no function was given, loop over every element of array and return false if any element is falsy
			for (let i = 0; i < collection.length; i++) {
				if (!collection[i]) {
					return false;
				}
			}
			//if all elements are truthy, return true
			return true;
		} else {
			//if a test function was given, loop over every element of array and return false if any element fails the function
			for (let i = 0; i < collection.length; i++) {
				if (!func(collection[i], i, collection)) {
					return false;
				}
			}
			//if all elements pass, return true
			return true;
		}
	} else { //if collection is not an array, assume it's an object
		//check if function exists
		if (!func) {
			//if no function was given, loop over every key/value pair in object and return false if any value is falsy
			for (let key in collection) {
				if (!collection[key]) {
					return false;
				}
			}
			//if every value on the object is truthy, return true
			return true;
		} else {
			//if a test function was given, loop over every key/value pair in object and return false if any pair fails the test function
			for (let key in collection) {
				if (!func(collection[key], key, collection)) {
					return false;
				}
			}
			//if every key/value pair passes, return true
			return true;
		}
	}
}


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(collection, func) {
	//check if collection is an array
	if (Array.isArray(collection)) {
		//check if function exists
		if (!func) {
			//if no function was given, loop over every element of array and return true if any element is truthy
			for (let i = 0; i < collection.length; i++) {
				if (collection[i]) {
					return true;
				}
			}
			//if all elements are falsy, return false
			return false;
		} else {
			//if a test function was given, loop over every element of array and return true if any element passes the function
			for (let i = 0; i < collection.length; i++) {
				if (func(collection[i], i, collection)) {
					return true;
				}
			}
			//if all elements fail, return false
			return false;
		}
	} else { //if collection is not an array, assume it's an object
		//check if function exists
		if (!func) {
			//if no function was given, loop over every key/value pair in object and return true if any value is truthy
			for (let key in collection) {
				if (collection[key]) {
					return true;
				}
			}
			//if every value on the object is falsy, return false
			return false;
		} else {
			//if a test function was given, loop over every key/value pair in object and return true if any pair passes the test function
			for (let key in collection) {
				if (func(collection[key], key, collection)) {
					return true;
				}
			}
			//if every key/value pair fails, return false
			return false;
		}
	}
}

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(array, func, seed) {
	//declare currentResult and startingIndex
	let currentResult, startingIndex;

	//if no seed is provided, use the first element as the seed and skip it during the for loop
	if (seed === undefined) {
		currentResult = array[0];
		startingIndex = 1;
	} else { //otherwise, use the seed as the initial value and start iterating at the beginning of the array
		currentResult = seed;
		startingIndex = 0;
	}

	//loop over the array, starting at either the first or second element, depending on whether the first element is used as the seed
	for (let i = startingIndex; i < array.length; i++) {
		//update the currentResult variable based on the function
		currentResult = func(currentResult, array[i], i);
	}

	//return the final result after iterating over the whole array
	return currentResult;
}

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function(data, ...objects) {
	//iterate over the objects provided to copy from, however many there may be
	for (let i = 0; i < objects.length; i++) {
		//iterate over the keys in each object
		for (let key in objects[i]) {
			//set the value of key on data to the same value as on object[i]
			//if key does not exist on data, this will create it
			//if it does, this will overwrite it with object[i]'s value
			data[key] = objects[i][key];
		}
	}

	//return the edited data object
	return data;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
