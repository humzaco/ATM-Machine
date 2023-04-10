import inquirer from "inquirer";
import users from "../users_database.js";
import chalk from "chalk";

async function transfer(balance: number) {
  let askamt = await inquirer.prompt([
    {
      name: "transferAcount",
      type: "number",
      message: chalk.rgb(195, 25, 193)("Enter Acount Number: "),
    },
    {
      name: "transferAmount",
      type: "number",
      message: chalk.rgb(28, 223, 179)("Enter Your Amount"),
    },
  ]);
  let user = users.find((x) => x.accountNumber == askamt.transferAcount);
  if (typeof user != "undefined") {
    balance -= askamt.transferAmount;
    console.log(chalk.rgb(127, 174, 26)("Your Transction is Successful!!"));
  } else {
    console.log("You Enter invalid account number");
  }
  return balance;
}

export default transfer;
