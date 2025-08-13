//* Q.1- Give choice to the user to select theme color and set the selected theme color and console it.

let color = "white";
let theme = prompt("Choose your theme color (light, green, pink, dark) : ");

if(theme === "light") {
    color = "white";
} else if(theme === "dark") {
    color = "black";
} else if(theme === "pink") {
    color = "pink";
} else if(theme === "green") {
    color = "green";
} else {
    console.log("Invalid theme!!");
}

console.log(`Your selected theme is ${theme} and color is ${color} respectively.`);