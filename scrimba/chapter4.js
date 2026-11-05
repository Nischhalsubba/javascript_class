//Numbers

//Javascript has one number type
let example = 100

console.log(example)

//parseInt and parseFloat
let example1 = 7.111

console.log(parseInt(example1))


let example2 = 7.11111

console.log(parseFloat(example2))

//toFixed -- returns a string representating a number with the exact number of decimal also rounding the number
//The output is in String
let example3 = 100.1

console.log(example3.toFixed(5))

//Challange

let example4 = parseInt("Hello 33 World 22");
let example5 = parseFloat('44 Dylan 33');
let example6 = 55.3333.toFixed(0);
let example7 = 200.0.toFixed(2);

console.log(typeof (example4));
console.log(typeof (example5));
console.log(typeof (example6));
console.log(typeof (example7));