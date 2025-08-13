// 4) Create a function that builds a username from a full name.

function createUsername(fullName) {
    return "@" + fullName.trim() + fullName.length;
}

console.log(createUsername("KuldeepVerma"));