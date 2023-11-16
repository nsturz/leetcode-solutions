// Source: https://leetcode.com/problems/function-composition/description/?envType=study-plan-v2&envId=30-days-of-javascript
// Author: Nick Sturz
// Date: 11/15/2023

// ++++++++++++++++++++++++++++++++++++++++++++++
// Challenge:

// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

// The function composition of an empty list of functions is the identity function f(x) = x.

// You may assume each function in the array accepts one integer as input and returns one integer as output.

 

// Example 1:

// Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
// Output: 65
// Explanation:
// Evaluating from right to left ...
// Starting with x = 4.
// 2 * (4) = 8
// (8) * (8) = 64
// (64) + 1 = 65
// Example 2:

// Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
// Output: 1000
// Explanation:
// Evaluating from right to left ...
// 10 * (1) = 10
// 10 * (10) = 100
// 10 * (100) = 1000
// Example 3:

// Input: functions = [], x = 42
// Output: 42
// Explanation:
// The composition of zero functions is the identity function

// ++++++++++++++++++++++++++++++++++++++++++++++

// My Solution. This was so confusing :(
var compose = function(functions) {
    if(functions.length === 0){
      return function(x) {
        return x;
    } 
  }  return function(x){
        let result = functions[functions.length - 1](x)
        for(let i = functions.length  - 2; i >= 0; i--){
          result = functions[i](result);
        }  return result;
    }
};
