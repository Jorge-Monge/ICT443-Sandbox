/*
//1
var firstName = "Lata";

//2
var flower = "rose";
var tree = "maple";

//3
console.log("Hello World");

//4
var userName = prompt("What is your name?");
console.log(`Hello, ${userName}!`);

//5
userName = prompt("What is your name?");
var greeting = (userName === "Alice" || userName === "Bob") ?
     `Hello, ${userName}!`: "Hello, user!";
console.log(greeting);

//6 
var userProvidedNumber = parseInt(prompt("Please enter a number:"));
// "Spread syntax", new in ECMAScript2015, plus "Arrow functions", new in ES63
console.log([...Array(userProvidedNumber + 1).keys()].reduce(
    (sumValue, arrayValue) => sumValue + arrayValue
));

//7
var userProvidedNumber = parseInt(prompt("Please enter a number:"));
// "Spread syntax", new in ECMAScript2015, plus "Arrow functions", new in ES63
console.log([...Array(userProvidedNumber + 1).keys()]
    .filter(arrayValue => arrayValue%3 === 0 || arrayValue%5 === 0)
    .reduce((sumValue, arrayValue) => sumValue + arrayValue));

//8
var userProvidedNumber = parseInt(prompt("Please enter a number:"));
var operatorSelection = prompt("Please enter a plus sign if you want the number summed up," +
    " and an asterisk if you want them multiplied");
var aggregator // function that will define the type of operation

switch (operatorSelection) {
    case "+":
    aggregator = (a, b) => a + b;
    break;
    case "*":
    aggregator = (a, b) => a * b;
} 

console.log([...Array(userProvidedNumber + 1).keys()]
    .slice(1) // Remove the first element (0) of the array
    .reduce((sumValue, arrayValue) => aggregator(sumValue, arrayValue)));

//9
var hello = () => console.log("Hello world!");

//10
// Obvious
*/
//11
var userProvidedNumber = parseInt(prompt("Please enter a number:"));

var numbersObject = Array(userProvidedNumber + 1);

console.log([...Array(userProvidedNumber + 1).keys()]
    .slice(1) // Remove the first element (0) of the array
    .reduce((sumValue, arrayValue) => aggregator(sumValue, arrayValue)));
