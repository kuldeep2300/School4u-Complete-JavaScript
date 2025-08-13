// 8) Build a Simple Text-Based Adventure Game
/* "You wake up in a dark forest..."
"Do you go 'left' or 'right' ? "

"after choosing left: "

"You walk into a swamp... "
"You see something shiny in the mud. Do you pick it up? (yes or no)"
"if yes:" "It's a magic stone! You are teleported to safety. You win! "
"if no" : " "You sink slowly into the mud. Game over. "

"after choosing right:'

"You find a cave...
"Do you enter the cave? (yes or no)"
"if yes:" "A dragon wakes up and chases you away. You barely escape! "
"if no: " "You set up camp outside the cave. A peaceful night under the stars. You win!

"Do you want to play again? (yes or no)"
 */

let playAgain = "yes";

while (playAgain === "yes") {
  alert("You wake up in a dark forest...");

  let userChoice = prompt("Do you go 'left' or 'right' ?");
  if (userChoice === "left") {
    alert("You walk into a swamp...");

    userChoice = prompt(
      "You seee something shiny in the mud. Do you pick it up? (yes or no)"
    );
    if (userChoice === "yes") {
      alert("It's a magic stone! You are teleported to safety. You win! ");
    } else {
      alert("You sink slowly into the mud. Game over. ");
    }
  } else {
    alert("You find a cave...");

    userChoice = prompt("Do you enter the cave? (yes or no)");
    if (userChoice === "yes") {
      alert("A dragon wakes up and chases you away. You barely escape! ");
    } else {
      alert(
        "You set up camp outside the cave. A peaceful night under the stars. You win!"
      );
    }
  }

  userChoice = prompt("Do you want to play again? (yes or no)");
  if (userChoice === "no") {
    playAgain = "no";
    alert("Thank you for playing!");
  }
}
