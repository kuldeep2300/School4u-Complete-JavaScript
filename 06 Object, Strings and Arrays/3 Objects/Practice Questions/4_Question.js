/* 4. Write a function that returns an array of names of users who have the role “admin”. 

const users = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Charlie", role: "admin" },
];*/

const users = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Charlie", role: "admin" },
];

function filterArray(arr, role) {
  // In object form
  let filteredItems = arr.filter((item) => {
    // console.log(item);
    return item.role === role;
  });

  // Converting into array form
  let resultArray = filteredItems.map((item) => item.name);
  return resultArray;
}

let resultArray = filterArray(users, 'admin');
console.log(resultArray);
