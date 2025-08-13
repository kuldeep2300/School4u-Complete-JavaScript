//* Q.6- Create a simple ATM program.
/* User can choose:
1. Check Balance
2. Deposit
3. Withdraw
4. Exit
Note that in case of “Deposit” if deposit amount is less than 1Rs produce error otherwise deposit the amount and show the message with a new balance. And in case of “Withdraw” if withdraw amount is greater than balance then or less than 1Rs then produce error otherwise withdraw amount and show remaining balance. */

let exit = false;
let balance = 0;

while (!exit) {
  let userChoice = Number(
    prompt(
      "Enter choice [1. Check Balance, 2. Deposit, 3. Withdrawl, 4. Exit) : "
    )
  );

  switch (userChoice) {
    case 2:
      let depositAmt = Number(prompt("Enter deposit amount : "));
      if (depositAmt < 1) {
        console.log("Error - Amount must be greater than or equal to 1");
        continue;
      }

      balance += depositAmt;
      console.log(
        `\nAfter ${depositAmt} Rs Deposit\nNew Balance : ${balance}\n`
      );

      break;

    case 3:
      let withdrawlAmt = Number(prompt("Enter withdrawl amount : "));
      if (withdrawlAmt < 1 || withdrawlAmt > balance) {
        console.log(
          "Error - Withdrawl amount should be greater than 1 or less than balance amount!"
        );
        continue;
      }

      balance -= withdrawlAmt;
      console.log(
        `\nAfter ${withdrawlAmt} Rs Withdrawl\nNew Balance : ${balance}\n`
      );

      break;

    case 1:
      console.log(`Current Balance : ${balance}`);
      break;
    case 4:
      exit = true;
      break;
    default:
      console.log("Invalid Choice!!");
  }
}
