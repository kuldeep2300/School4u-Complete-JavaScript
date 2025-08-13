//* Challenge 1:
// Scenario: A website gives discounts based on the total shopping cart amount.
// Question :
// Write a program where:

// If the cart value is less than $50, no discount is applied.
// If the cart value is between $50 and $100, apply a 10% discount.
// If the cart value is more than $100, apply a 20% discount.

// Display the final cart total after the discount.

let cartValue = 50;
let finalCartValue;

if(cartValue < 50) {
    finalCartValue = cartValue;
    console.log("No discount is applied.");
} 
else if(cartValue >= 50 && cartValue <= 100) {
    finalCartValue = cartValue - (cartValue * 0.10);
    console.log("A 10% discount has been applied.");
}
else {
    finalCartValue = cartValue - (cartValue * 0.20);
    console.log("A 20% discount has been applied.");
}

console.log(`The final cart total is ${finalCartValue.toFixed(2)}.`);

