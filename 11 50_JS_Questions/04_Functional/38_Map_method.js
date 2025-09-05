//* 38. How would you use .map() to transform a list of products into a list of HTML elements?

const orderList = document.querySelector(".orderList");

const users = [
  {
    name: "Kuldeep Verma",
    age: 21,
  },
  {
    name: "Kushagra Verma",
    age: 21,
  },
  {
    name: "Vishesh Kumar Verma",
    age: 18,
  },
  {
    name: "Khushi Verma",
    age: 19,
  },
];

users.map((obj) => {
  let li = document.createElement("li");

  li.textContent = obj.name;
  orderList.append(li);
});
