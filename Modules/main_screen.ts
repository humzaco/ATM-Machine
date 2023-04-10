import inquirer from "inquirer";
import cashWidthdarw from "./Transaction Types/cash_widthdraw.js";
import cashDeposit from "./Transaction Types/cash_deposit.js";
import transfer from "./Transaction Types/transfer.js";
import chalk from "chalk";

async function anotherTransction() {
  let askQus = await inquirer.prompt([
    {
      name: "otherTransction",
      type: "list",
      choices: ["Yes", "No"],
      message: chalk.rgb(130, 130, 130)("Do You Want Another Transction."),
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
        message: chalk.rgb(26, 174, 40)("Please Select Your Transaction Type."),
      },
    ]);

    switch (askOption.menu) {
      case "Balance Inquriy":
        console.log(
          chalk.rgb(173, 132, 21)(`Your current balance is: ${balance}`)
        );
        break;
      case "Cash Widthdraw":
        balance = await cashWidthdarw(balance);
        console.log(chalk.rgb(127, 174, 26)("Your Transction is Successful!!"));
        console.log(
          chalk.rgb(173, 132, 21)(`Your current balance is: ${balance}`)
        );
        break;
      case "Cash Deposit":
        balance = await cashDeposit(balance);
        console.log(chalk.rgb(127, 174, 26)("Your Transction is Successful!!"));
        console.log(
          chalk.rgb(173, 132, 21)(`Your current balance is: ${balance}`)
        );
        break;
      case "Tranfer":
        balance = await transfer(balance);
        console.log(
          chalk.rgb(173, 132, 21)(`Your current balance is: ${balance}`)
        );
        break;
      case "Exit":
        antran = "No";
        break;
    }
    if (askOption.menu !== "Exit") {
      var antran = await anotherTransction();
    }
  } while (antran == "Yes");
}

export default mainScreen;
