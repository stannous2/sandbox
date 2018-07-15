// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================

var inquirer = require("inquirer");

inquirer
.prompt([
 {
     type: "input",
     message: "what is your name?",
     name: "username"
 },
 {
    type: "confirm",
    message: "Are you sure:",
    name: "confirm",
    default: true
  },
  {
    type: "password",
    message: "Set your password",
    name: "password"
  },
  {
    type: "confirm",
    message: "Are you sure:",
    name: "confirm",
    default: true
  },
  {
    type: "checkbox",
    message: "Which Pokemon do you choose?",
    choices: ["Bulbasaur", "Squirtle", "Charmander"],
    name: "pokemon"
  },
  // Here we ask the user to confirm.
  {
    type: "confirm",
    message: "Are you sure:",
    name: "confirm",
    default: true
  }

])
.then(function(inquirerResponse) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
    if (inquirerResponse.confirm && inquirerResponse.password === 'lll') {
      console.log('password: ' + inquirerResponse.password);  
      console.log("\nWelcome " + inquirerResponse.username);
      console.log("Your " + inquirerResponse.pokemon + " is ready for battle!\n");
    }
    else {
      console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
    }
});