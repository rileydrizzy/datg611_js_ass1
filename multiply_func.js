/**
 * @file multiply_func.js
 * @description This file contains a utility function to multiply a variable number of numeric arguments.
 * It demonstrates the use of the rest parameter syntax and array reduction in JavaScript.
 */

/**
 * Multiplies all provided numeric arguments.
 * 
 * @param {...number} numbers - A variable number of arguments to be multiplied.
 * @returns {number} The product of all arguments. Returns 0 if no arguments are provided.
 */
function multiplyArguments(...numbers) {
  // Return 0 if no arguments are passed
  if (numbers.length === 0) return 0;

  return numbers.reduce((product, currentNumber) => product * currentNumber, 1);
}

// Examples:
console.log(multiplyArguments(2, 3));
console.log(multiplyArguments(2, 3, 4, 5));
console.log(multiplyArguments(7));         
