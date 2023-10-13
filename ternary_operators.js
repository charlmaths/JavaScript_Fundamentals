// Conditional (Ternary) Operators - only operator in JS that takes 3 operand
/*
The function below takes fee for a ticket, if the person is a member, we charge them £2.00
if not, then we charge them £10.00
*/

function getFee(isAMember) {
    return isAMember ? "£2.00" : "£10.00"
}

console.log(getFee(true)); // returns £2.00
console.log(getFee(false)); // returns £10.00


/*
This is the same as writing a function like below
*/

function getFee_v2(isAMember) {
    if (isAMember === true) {
        return "£2.00"
    } else {
        return "£10.00"
    }
}

console.log(getFee_v2(true));
console.log(getFee_v2(false));


/*
Also remember - truthy and falsey basically as long as its not false, null, empty strings, undefined
all values are truthy so we dont even have to 'equate' a value for our argument, its just considered
to be true - so we can write the function above as below:
*/

function getFee_v3(isAMember) {
  if (isAMember) { // This is just considered to be truth-y
    return "£2.00";
  } else {
    return "£10.00";
  }
}

console.log(getFee_v3(true));
console.log(getFee_v3(false));