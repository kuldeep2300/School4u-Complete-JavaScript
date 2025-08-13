// 4) Create a “Number Knock” game. (ask the user to keep guessing the number until the user enters correct guess) .

let correctGuess = 45;

while (true) {
  let userGuess = Number(prompt("Enter guess number : "));

  if (isNaN(userGuess)) {
    alert("Not valid number, please try again!");
  } else if (userGuess === correctGuess) {
    break;
  } else if (userGuess > correctGuess) {
    alert("You enter higher value!");
  } else {
    alert("You enter lower value!");
  }
}

console.log(`-You won-`);

//* Another way
/* let correctGuess = 45;
let userGuess = null;

while (userGuess !== correctGuess) {
   userGuess = Number(prompt("Enter guess number : "));

  if (isNaN(userGuess)) {
    alert("Not valid number, please try again!");
  } else if (userGuess === correctGuess) {
    break;
  } else if (userGuess > correctGuess) {
    alert("You enter higher value!");
  } else {
    alert("You enter lower value!");
  }
}

console.log(`-You won-`);
 */