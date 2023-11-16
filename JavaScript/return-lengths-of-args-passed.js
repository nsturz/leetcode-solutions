// Source: https://leetcode.com/problems/return-length-of-arguments-passed/description/?envType=study-plan-v2&envId=30-days-of-javascript
// Author: Nick Sturz
// Date: 11/16/2023

//+++++++++++++++++++++++++++++++++++++++++++++++
//Challenge: 
// Write a function argumentsLength that returns the count of arguments passed to it.
 

// Example 1:

// Input: args = [5]
// Output: 1
// Explanation:
// argumentsLength(5); // 1

// One value was passed to the function so it should return 1.
// Example 2:

// Input: args = [{}, null, "3"]
// Output: 3
// Explanation: 
// argumentsLength({}, null, "3"); // 3

// Three values were passed to the function so it should return 3.

// ++++++++++++++++++++++++++++++++++++++++++++++
// My Solution:

var argumentsLength = function(...args) {
	let counter = 0; // declare a variable that will be the counter
	for(let i = 0; i < args.length; i++){ // loop through arguments
		counter++; // increment counter each time the array is passed through
	} return counter // return the counter variable
};
