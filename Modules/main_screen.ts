import inquirer from "inquirer";
import cashWidthdarw from "./Transaction Types/cash_widthdraw.js";
import cashDeposit from "./Transaction Types/cash_deposit.js";

async function anotherTransction() {
  let askQus = await inquirer.prompt([
    {
      name: "otherTransction",
      type: "list",
      choices: ["Yes", "No"],
      message: "Do You Want Another Transction.",
    },
  ]);
  return askQus.otherTransction;
}

async function mainScreen(balance: number) {
  do {
    let askOption = await inquirer.prompt([
      {
        name: "menu",
        type: "list",
        choices: [
          "Balance Inquriy",
          "Cash Widthdraw",
          "Cash Deposit",
          "Tranfer",
          "Exit",
        ],
        message: "Please Select Your Transaction Type.",
      },
    ]);

    switch (askOption.menu) {
      case "Balance Inquriy":
        console.log(`Your current balance is: ${balance}`);
        break;
      case "Cash Widthdraw":
        balance = await cashWidthdarw(balance);
        console.log("Your Transction is Successful!!");
        console.log(`Your current balance is: ${balance}`);
        break;
      case "Cash Deposit":
        balance = await cashDeposit(balance);
        console.log("Your Transction is Successful!!");
        console.log(`Your current balance is: ${balance}`);
        break;
      case "Tranfer":
        console.log("Tranfer");
        break;
      case "Exit":
        console.log("Exit");
        break;
    }
    var antran = await anotherTransction();
  } while (antran == "Yes");
}

export default mainScreen;
