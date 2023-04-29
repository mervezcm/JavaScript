let str1 = 'Java';
let str2 = "Script";
let str3 = "awesome";

let result;

result = "the result variable is: "+ str1 + str2 +' '+ str3; // like Java

console.log(result);

// difference from Java: backticks for variable insertion

result =`the result variable is: ${str1}${str2} ${str3}`
console.log(result);