// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here

// Try playing computer with the example to work out what is going on

//function convertToPercentage(decimalNumber) {

 // const percentage = `${decimalNumber * 100}%`;
  
 // return percentage;
//}

//console.log(convertToPercentage(0.5)); 


//It must be stopped at line 7
//SyntaxError: Identifier 'decimalNumber' has already been declared
//The parameter decimalNumber is declared, using in the const again is impossible.
//console.log does not recall the function it just prints decimalNumber
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5)); // "50%"
console.log(convertToPercentage(0.1234)); // "12.34%"
console.log(convertToPercentage(1)); // "100%"
