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
            break
        case "cloudy":
            paragraph.textContent = "It is cloudy - eh not too bad (using switch)";
            break
        default:
            paragraph.textContent = ""; // empty string for default, this is just similar to else
    }
}