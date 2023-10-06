/*
We are changing switch statements to if...else then vice versa
*/
let browser = "Edge";

function browserSelect() {
  choice = browser;

  if (choice === "Edge") {
    console.log("You've got IE Edge");
  } else if (choice === "Firefox") {
    console.log("You're using Firefox");
  } else if (choice === "Chrome") {
    console.log("You're using chrome g");
  }
}

// Call the function output -- This is how we call functions in JS
browserSelect();
