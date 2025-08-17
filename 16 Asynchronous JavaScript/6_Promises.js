//* Promise : Constructor function having 3 state
/* 1) Pending
2) Fulfilled
3) Rejected

-> Promise and fetch comes to resolve the issue of callback hell, promise have 2 callback function resolve and reject.
*/

//? Promise Creation - Fake promise for understanding working
/* let p = new Promise((resolve, reject) => {
  //   resolve("Data fetched successfully...");
  reject("Mai tumse pyar nhi karti hu");
});

console.log(p);
 */

//? Promise - Get data after fetching
/* let p = new Promise((resolve, reject) => {
  console.log("promise chal rha hai");
  //   resolve({
  //     name: "Kuldeep Verma",
  //     age: 21,
  //   });

  reject("Somethng went wrong...");
});

console.log(p); */

/* We have to use then and catch together otherwise we get warning.
if() 

if() // if we use different if then it will be case that both will run, but we only want that one condition run that's why we use if_else() which run only one part. Similarly here we have to use them both together to prevent error, so that execution flow does not stop.
*/

// p.then((data) => {
//   console.log(data);
// });

// p.catch((error) => {
//   console.log(error);
// });

/* p.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
}) */

//? Promise - Example 3)
/* let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: "Kuldeep Verma",
    });
  }, 5000);
});

console.log(p);

p.then((data) => {
  console.log(data);
}).catch((error) => {
  console.error(error);
});
*/

//? Example - 4) Building Pyramid of doom of callback like structure like after 1st data comes then 2nd data will be fetch how to do this in promise
/* 
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "Kuldeep Verma",
        age: 21,
      });
    }, 3000);
  });
}

function fetchData2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "Kushagra Verma",
        age: 21,
      });
    }, 3000);
  });
}

let response = fetchData();

console.log("fetching data...");
response
  .then((res) => {
    console.log("Data 1 bhi aa chuka");
    console.log(res);
    return fetchData2();
  })
  .then((res) => {
    console.log("Data 2 bhi aa chuka hai");
    console.log(res);
    return fetchData2();
  })
  .then((res) => {
    console.log("Data 3 bhi aa chuka hai");
    console.log(res);
    return fetchData2();
  })
  .then((res) => {
    console.log("Data 4 bhi aa chuka hai");
    console.log(res);
  })
  .catch((err) => {
    console.log("Something went wrong : ", err);
  });
 */

//? Example - 5) We don't have to build promise manually because we have fetch method for fetching data which already returning us promise.

let response = fetch("https://jsonplaceholder.typicode.com/users");

response
  .then((data) => {
    // console.log(data);
    return data.json();
  })
  .then((objectData) => {
    console.log("Data in object form : ", objectData);
  })
  .catch((err) => {
    console.log("Something went wrong :", err);
  });

console.log(response);
