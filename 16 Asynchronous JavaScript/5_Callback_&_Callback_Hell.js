// callback hamesa ek function hota hai
// callback wo function hota hai jisko ham as a argument pass kar rhe hote hai
// hod (higher order function) waisa function hota joki apne andar ek function (yani ki callback) le rha hota hai.

//? Example - 1 (Synchronous Nature)
/* function hod(name, callback) {
  callback(name);
}

function printName(name) {
  console.log(`Hello : ${name}`);
}

hod("Kuldeep Verma", printName);
 */

//? Example - 2 (Synchronous Nature)
/* 
function calculate(a, b, callback) {
  callback(a, b);
}

function sum(a, b) {
  console.log(`Sum : ${a + b}`);
}

function subtract(a, b) {
  console.log(`Subtract : ${a - b}`);
}

function multiply(a, b) {
  console.log(`Multiply : ${a * b}`);
}

calculate(5, 3, sum);
calculate(5, 3, subtract);
calculate(5, 3, multiply);
*/

//? Example - 3 (Asynchronous Nature)
/* 
console.log("1. Fetching data");

function fetchData(processData) {
  setTimeout(() => {
    console.log("2. Data fatch ho chuka hai");
    processData();
  }, 3000);
}

function processData() {
    console.log('3. Processing with data for working');
}

console.log('4. Some other tasks');

fetchData(processData);
*/

//* Example - 4) (Asynchronous code) - CALLBACK HELL OR PYRAMID OF DOOM
/* function getData(data, callback) {
  setTimeout(() => {
    console.log(data);
    if (callback) {
      callback();
    }
  }, 3000);
}

console.log('Fetching 1st data...');

getData('1st Data', () => {
  console.log('Fetching 2nd data...');
  getData('2nd Data', () => {
    console.log('Fetching 3rd data');
    getData('3rd Data', () => {
      console.log('Fetching 4th data');
      getData('4th Data');
    })
  });
});
 */

// getData('2nd Data');
// getData('3rd Data'); ❌ all three run together coz they all have same time all three will be stored in web api (side stack) when main stack empty then all the 3 code having same time that's why they run together. But using callback hell method I want first 1st data should be fetch then after 1st data comes then second data should be fetched... same for further task also.

//? Example - 5 (Callback Hell - usually in asynchronous code)
/* setTimeout(() => {
  console.log("1. Getting user from database...");
  setTimeout(() => {
    console.log("2. Getting user's orders...");
    setTimeout(() => {
      console.log("3. Processing Payment...");
      setTimeout(() => {
        console.log("4. Sending confirmation email...");
      }, 3000);
    }, 3000);
  }, 3000);
}, 3000);
 */