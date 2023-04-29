/**
 * There is no Collection in JS. In JS we only have Arrays and Map
 * NOT Fixed size
 * There are two important Brackets in JS 
 * 1. [] ----> creates an Array
 * 2. {} ----> creates an object
 */

let scores = new Array(); // creates an empty Array
let numbers = new Array(10); // creates an array with size 10
let emptyArray = []; // creates an empty Array
let myNumbers = new Array(1,2,3,5,8,13);
let colors = ['red','green','blue'];


console.log(scores);
console.log(numbers);
console.log(emptyArray);
console.log(myNumbers);
console.log(colors);

// print second element in an array
console.log(colors[1]); // indexed based

// add element to an Array at the end
colors.push("white");
console.log(colors);

// add element to beginnig of the Array
colors.unshift("orange"); 
console.log(colors);

console.log(colors.pop()); // giving the last element and removing at the same time: white
console.log(colors); 

// the size of the array
console.log(colors.length);
for (let i = 0; i < colors.length ; i++){
   console.log(colors[i]);
}

// loop with values of Array
for (let value of colors) {
    console.log(value);
}

colors.forEach(element => {
    console.log(element);
});

// can we add multiple type of Data? YES
let soupOfData = [5, "Oscar", true, undefined]; // you can also put Map, Object, Functions inside Array
soupOfData.forEach(element => {
    console.log(typeof element);
});