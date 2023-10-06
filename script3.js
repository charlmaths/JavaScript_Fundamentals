/*
This function is similar to the function in script2 - that is, we are still testing conditionals but instead
of using if...else statements, we are using switch conditionals
how it works is that you use:

switch(expression):
    case choice1:
        run this code
        break;
    case choice2:
        run this code
        break;
        ....
    default:
        actually yeah run this code
        break;
*/

/*
We are still declaring some variables and we are still using document selectors like we did before:

*/
const select = document.querySelector("select");
const paragraph = document.querySelector("p");

select.addEventListener("change", setWeather2);

function setWeather2() {
    // A new function that uses switch instead of if...else
    const choice = select.value // value of select variable above is saved into 'choice'

    switch(choice) {
        case "sunny":
            paragraph.textContent = "It is sunny - go outside and swim (using switch)";
            break;
        case "rainy":
            paragraph.textContent = "It is rainy - bring an umbrella (using switch)";
            break;
        case "snowy":
            paragraph.textContent = "It is snowy - bring a thick jacket (using swithch)";
            break;
        case "cloudy":
            paragraph.textContent = "It is cloudy - eh not too bad (using switch)";
            break;
        default:
            paragraph.textContent = ""; // empty string for default, this is just similar to else
    }
}

/*
Now the reason we add a break after a switch is because if we don't it will output all of the cases under the case
we selected, i.e. if we pick case "sunny" and there is no break after it, it will print out case "rainy", case "snowy" etc...
because it just assumes that the first condition is true and therfore all the switches must also be 'turned-on'.
Basically, if an equality is found it will execute the code corresponding to the case that it equals to and any code after it
until it reaches the nearest break or the end of cases!

The default value is there so that if no cases matches - then we will have a value.

Also we can group switch cases, i.e. if they have the same result, we don't have to put a break near them i.e.

case 1 = result a
case 2, case 3 = result b
case 4 = result c

case(expression):
    case "case1":
        result a;
    break;
    case "case2":
    case "case3":
        result b;
    break;
    case "case4":
        result c;
    break


so always break!
*/


