// Fetch is async in nature and it does not stop the flow of the execution and directly execute next code so instead of blocking fetch give us promise meaning it will give us data later when it arrives, but it is async so it not wait for data arrival that's why it return promise and we have to convert or use sync nature also here so that it will wait for fetching details so then show response like in sync nature that's why we use await.

async function fetchData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  // json is in-built method which convert json data into proper readable JS Object, and it is also async in nature that's why it jump to next code and return promise, that's why here we also make it sync meaning wait untill data returns.
  console.log(await response.json());
}

fetchData();
console.log("Task - 1 Completed");
console.log("Task - 2 also completed");
