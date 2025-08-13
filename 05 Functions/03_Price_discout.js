// 3) Make an arrow function that takes a price and a discount, and returns the price after discount.

let price = 100;
let discount = 20;

let calculateDiscountedPrice = (price, discount) => {
  return price - price * (discount / 100);
};

console.log(`After ${discount}% discount Price : ${calculateDiscountedPrice(price, discount)}`);
