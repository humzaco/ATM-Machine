import inquirer from "inquirer";
import chalk from "chalk";

async function otherAmountFun(balance: number) {
  let askOtherAmount = await inquirer.prompt([
    {
      name: "otherAmount",
      type: "number",
      message: chalk.rgb(195, 25, 193)("Please Enter Your Ammount"),
    },
  ]);

  if (askOtherAmount.otherAmount < balance) {
    balance -= askOtherAmount.otherAmount;
  } else {
    console.log(chalk.rgb(195, 53, 25)("You have insufficient balance!"));
  }

  return balance;
}

async function cashWidthdarw(balance: number) {
  let askAmount = await inquirer.prompt([
    {
      name: "amount",
      type: "list",
      choices: ["500", "1000", "2000", "5000", "10000", "Other Amount"],
      message: chalk.rgb(28, 223, 179)("Please select your amount"),
    },
  ]);

  switch (askAmount.amount) {
    case "500":
      if (balance > askAmount.amount) {
        balance -= 500;
        break;
      } else {
        console.log(chalk.rgb(195, 53, 25)("You have insufficient balance!"));
      }
    case "1000":
      if (balance > askAmount.amount) {
        balance -= 1000;
        break;
      } else {
        console.log(chalk.rgb(195, 53, 25)("You have insufficient balance!"));
      }
    case "2000":
      if (balance > askAmount.amount) {
        balance -= 2000;
        break;
      } else {
        console.log(chalk.rgb(195, 53, 25)("You have insufficient balance!"));
      }
    case "5000":
      if (balance > askAmount.amount) {
        balance -= 5000;
        break;
      } else {
        console.log(chalk.rgb(195, 53, 25)("You have insufficient balance!"));
      }
    case "10000":
      if (balance > askAmount.amount) {
        balance -= 10000;
        break;
      } else {
        console.log(chalk.rgb(195, 53, 25)("You have insufficient balance!"));
      }
    case "Other Amount":
      balance = await otherAmountFun(balance);
      break;
  }

  return balance;
}

export default cashWidthdarw;
