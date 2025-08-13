//? Challengel :
/* On a shopping website, calculate the total cost of a product when given the price per item (price = 150) and the quantity (quantity = 3).
Also, calculate a 10% discount on the total cost and display the discounted price. */

let price = 150;
let quantity = 3;

let totalCost = price * quantity;
let discount = totalCost * 0.10; 
let discountedPrice = totalCost - discount;

console.log("Price per item:", price);
console.log("Quantity:", quantity);
console.log("Total Cost:", totalCost);
console.log("Discount (10%) :", discount);
console.log("Discounted Price :", discountedPrice);