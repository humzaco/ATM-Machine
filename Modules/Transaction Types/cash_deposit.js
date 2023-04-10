import inquirer from "inquirer";
import chalk from "chalk";
async function cashDeposit(balance) {
    let askAmount = await inquirer.prompt([
        {
            name: "amt",
            type: "number",
            message: chalk.rgb(195, 25, 193)("Enter Your Amount"),
        },
    ]);
    balance += askAmount.amt;
    return balance;
}
export default cashDeposit;
