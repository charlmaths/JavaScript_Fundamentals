// New JavaScript Activity
/*
First is we declare a variable using 'const' and we called these variables 'select' and 'paragraph'
it's quiet similar on how we select elements in CSS
*/
const select = document.querySelector("select");
const paragraph = document.querySelector("p");

/*
The methods document.querySelector is how javascript "talk" to an html document,
it then uses a method .querySelector to select html tags, so we have a select and paragraph tag in our
document and this will allow us to to access their information/values
*/

select.addEventListener("change", setWeather);
/*
This is called an event listener, basically this will listen to the <select> element in the HTML document
with                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             in this JS script - and essentially if the value in <select> is changed, we can trigger the function below
the "change" is the event - we need this event listener to trigger our js function
*/

function setWeather(){
    // whatever the value we get from select we are saving it into a new variable called choice
    // then we will write the conditionals below:
    const choice = select.value;

    // .textContent is how javascript outputs stuff onto an HTML document - we will study this further later
    if (choice === "sunny") {
      paragraph.textContent = "It is sunny - go outside and swim";
    } else if (choice === "rainy") {
      paragraph.textContent = "It is rainy - go outside and bring an umbrella";
    } else if (choice === "snowy") {
      paragraph.textContent = "It is snowy - go outside and bring a thick jacket";
    } else if (choice === "cloudy") {
      paragraph.textContent = "It is cloudy - go outside and bring a light jacket";
    } else {
        paragraph.textContent = ""; // This will be empty because before we select anything, its empty
    }
}

