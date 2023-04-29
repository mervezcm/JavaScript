console.log("Hello JavaScript Learners");

// Single comment line
/**
 * Multiple comment line
 */

// decalaring variables
/**
 * JS is dynamic typing languge
 */

let a;
console.log(typeof a);
a = 5;  // infers that a is number
console.log(typeof a);
a = 'BootCamp'; // infers that a is String
console.log(typeof a);
a = true;// infers that a is boolean
console.log(typeof a);


let x = 5, y = 'Oscar';
console.log(x+y); // concatination : 5Oscar
console.log(x*y); // NaN

// Naming Rules : same with JAVA naming rules

// constant variables

const number = 35;
// TypeError: Assignment to constant variable.
// number = 45; 
console.log(number);