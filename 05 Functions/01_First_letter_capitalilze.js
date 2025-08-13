// 1) Write a regular function that takes a string and returns it with the first letter capitalized.

function capitalizeFirstLetter(str) {
    console.log(str.charAt(0).toUpperCase() + str.slice(1));
}

capitalizeFirstLetter("hello");