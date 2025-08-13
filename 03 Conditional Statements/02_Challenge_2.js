//* Challenge 2:
/*Scenario: On a video-streaming platform, verify user access to premium content.

Question :
Write a program to check if a user has a valid subscription. If the user has a subscription,
further check if the subscription is "premium" or "standard" .

If "premium", display "Access to all content" .
If "standard", display "Access to limited content" .
If the user doesn't have a subscription, display "Please subscribe to access content. " */

let hasSubscription = true;
let subscriptionType = "standard";

if (hasSubscription) {
  if (subscriptionType === "premium") {
    console.log("Access to all content.");
  } else if (subscriptionType === "standard") {
    console.log("Access to limited content.");
  } else {
    console.log("Unknown Subscription type!");
  }
} else {
  console.log("Please subscribe to access content.");
}
