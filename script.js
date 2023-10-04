// JavaScript Code goes here
console.log("hello world")
console.log(5+5)
console.log(3**2)

/*
let message;
message = "This is a variable in JS";
console.log(message)
*/


// Decleration of variables and assigning values into it - we can do this both in one line

let user = "john"; // We have declare a variable called 'user' then assigned a value 'john'
let age = "50"; // Variable called 'age' is declared, value "50" is assigned
let message = "hello";
console.log(user) // console.log to 'output' it on the console on the internet
console.log(age)
console.log(message)

// JavaScript Mathematics - Basic Operators:

/*
Now we can perform quick maths by doing the operation within the console log.
But, to use variables, we must declare them first and assign a value to them using 'let'.
*/

// Basic maths using console.log:
console.log(5 + 5) // Addition
console.log(5 - 2) // Subtraction
console.log(5 * 5) // Multiplication
console.log(10 / 5) // Division
console.log(10 % 5) // Modulo Division
console.log(2 ** 2) // Exponential

// Using variables:

/*
let x = 3;
let y = 2;
console.log(x + y) // 3 + 2 = 5
console.log(x - y) // 3 - 2 = 1
console.log(x * y) // 3 * 2 = 6
console.log(x / y) // 3 / 2 = 1.5 (float!)
console.log(x % y) // 3 mod 2 = 1 (It's got 1 remainder)
console.log(x ** y) // 3^2 = 9
*/



// Concatenation:
/*
Similar to python, we can concatenate strings together but with J.S. we don't have to convert
something into a string via str() first. Instead, we can just concatenate a string with something
then it will change it.
*/


let x = 5;
let x_3; x_3 += x + 2;
console.log(x_3)

let max = 57;
let actual = max - 13;
let percentage = actual/max;
console.log(percentage)

console.log(1 || 0)

let firstName = "";
let lastName = "";
let nickName = "SuperHackerx";

console.log(firstName || lastName || nickName || "anon")

if (1 && 0) {
  // evaluated as true && false
  alert("won't work, because the result is falsy");
}

let hour = 12;
let min = 30;

if (hour == 13 && min == 30){
    console.log("Time is 12:30");
}