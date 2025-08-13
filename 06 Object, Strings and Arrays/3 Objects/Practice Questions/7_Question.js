/* 7. Write a function buildQuery(params) that returns 
const params = {
  search: "laptop",
  page: 2,
  sort: "price",
};

//* Output : "search=laptop&page=2&sort=price"
*/

const params = {
  search: "laptop",
  page: 2,
  sort: "price",
};

function buildQuery(params) {
  let url = "";
  for (let index in params) {
    url += `${index}=${params[index]}&`;
  }

  url = url.slice(0, url.length-1);
  return url;
}

console.log(buildQuery(params));
