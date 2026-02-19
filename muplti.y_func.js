

function multiplyArguments(...numbers) {
  // Return 0 if no arguments are passed
  if (numbers.length === 0) return 0;
  
  // Multiply all numbers in the array
  return numbers.reduce((product, currentNumber) => product * currentNumber, 1);
}

// Examples:
console.log(multiplyArguments(2, 3));     
console.log(multiplyArguments(2, 3, 4, 5)); 
console.log(multiplyArguments(7));         
