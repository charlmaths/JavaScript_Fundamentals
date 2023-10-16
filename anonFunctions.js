/*
These are the type of functions that does not have a name - i.e. anonymous functions
basically, to use them, we must save them into a variable first then basically call that variable
we are using function as an expression - because otherwise we will not be able to use it.
*/

// Normal function (named) function

function addnum (num1, num2) {
    return num1 + num2
}

let result1 = addnum(5,6)
// console.log(result1)

// Using anon function

let addingNumbers = function(num1, num2) {
    return num1 + num2;
}

let result2 = addingNumbers(4,6)
// console.log(result2)

/*
it may seem like the above examples are not too different - but anonymous function are really
useful especially when we want functions as VALUES or when want the value of a function straight away
because named functions or functions that's been declared are technically "reserved" in other words
we tend to save them for "later use" where as anon functions that we want the values straight away.
*/


// caclulate volume - this is using anon function as an expression.
// volume = A x L where A = b x h.


// function volume_rect(a, L) {
//   console.log(a * L);
// }

// let area = function (b,h) {
//     return b * h
// }

// volume_rect(area(2,2),10)


// function greet(wish) {
//     console.log(wish(), "everyone!");
// }

// greet(function(){
//     return "Yo";
// })


// setTimeout(function () {
//     console.log("This message will show after 2 seconds");
// }, 2000)

// const age = 19
// const drinkToServe = () => age > 18 ? "Beer" : "Juice";
// console.log(drinkToServe())


// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
// }

// ask(
//   "Do you agree?",
//   () => console.log("you agreed."),
//   () => console.log("you cancelled")
// );


// This won't work because confirm does not work in NODE.JS but we are right still!
const ask = (question, yes, no) => confirm(question) ? yes() : no();
ask(
    "do you agree?",
    () => console.log("you agreed!"),
    () => console.log("so you dont?")
)