//* 40. Explain immutability and how you would update an object in an array without mutating the original.

const users = [
  {
    id: 1,
    name: "Kuldeep Verma",
    age: 21,
  },
  {
    id: 2,
    name: "John Doe",
    age: 25,
  },
];

let updatedUsers = users.map(user => {
    if(user.id === 1) { 
        return {...user, age: 22} // returning a new object with updated age
    }

    return {...user}; // copy unchanged user object
})

console.log(`Original Users : `, users);
console.log(`Updated Users : `, updatedUsers);