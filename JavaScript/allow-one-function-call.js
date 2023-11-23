// Source: https://leetcode.com/problems/allow-one-function-call/description/?envType=study-plan-v2&envId=30-days-of-javascript
// Author : Nick Sturz
// Date   : 11/23/2023

//+++++++++++++++++++++++++++++++++++++++++++++++
//Challenge:

// Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

// The first time the returned function is called, it should return the same result as fn.
// Every subsequent time it is called, it should return undefined.
 

// Example 1:

// Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
// Output: [{"calls":1,"value":6}]
// Explanation:
// const onceFn = once(fn);
// onceFn(1, 2, 3); // 6
// onceFn(2, 3, 6); // undefined, fn was not called
// Example 2:

// Input: fn = (a,b,c) => (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]
// Output: [{"calls":1,"value":140}]
// Explanation:
// const onceFn = once(fn);
// onceFn(5, 7, 4); // 140
// onceFn(2, 3, 6); // undefined, fn was not called
// onceFn(4, 6, 8); // undefined, fn was not called

//+++++++++++++++++++++++++++++++++++++++++++++++
// My Solution:

var once = function(fn) { // anonymous function saved to variable named "once"
    let hasBeenCalled = false; // the value false gets assigned to the variable "hasBeenCalled"
    let result; // The variable "result" is declared without initialization
	return function(...args){ // the inner function is returned
     if(!hasBeenCalled){ // inner function checks if the statement "!hasBeenCalled" evaluates to true
         result = fn(...args) // it does, so the fn function is called and passed with (...args)
         hasBeenCalled = true; // hasBeenCalled gets flipped to true
        return result; // result is returned
     } else { // since "hasBeenCalled" is now true, the if statement evaluates to false, so the next code block runs
         return undefined // undefined is returned
     }
    }
};