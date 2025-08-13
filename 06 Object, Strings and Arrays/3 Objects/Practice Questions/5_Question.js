/* 5. Write a function searchProducts(products, keyword) that returns an array of products whose name includes the given keyword (case-insensitive).
const products = [
  { id: 1, name: "iPhone 14" },
  { id: 2, name: "Samsung Galaxy" },
  { id: 3, name: "Google Pixel" },
];*/

const products = [
  { id: 1, name: "iPhone 14" },
  { id: 2, name: "Samsung Galaxy" },
  { id: 3, name: "Google Pixel" },
];

function searchProducts(products, searchKeyword) {
  let filterArr = products.filter((item) => {
    return item.name.toLowerCase().includes(searchKeyword.toLowerCase());
  });

  return filterArr;
}

let result = searchProducts(products, 'pixel');
console.log(result);
