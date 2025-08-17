function getData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "Kuldeep Verma",
        data,
      });
    }, 1000);
  });
}

async function fetchData() {
  let data1 = await getData(1);
  console.log(data1);
  let data2 = await getData(2);
  console.log(data2);
  let data3 = await getData(3);
  console.log(data3);
  let data4 = await getData(4);
  console.log(data4);
  let data5 = await getData(5);
  console.log(data5);
  let data6 = await getData(6);
  console.log(data6);
  let data7 = await getData(7);
  console.log(data7);
}

fetchData();

const fetchApi = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  console.log(await response.json());
};

fetchApi();
