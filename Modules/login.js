import inquirer from "inquirer";
import users from "./users_database.js";
import mainScreen from "./main_screen.js";
import chalk from "chalk";
async function login() {
    let askInfo = await inquirer.prompt([
        {
            name: "accountNumber",
            type: "number",
            message: chalk.rgb(195, 25, 193)("Please Enter Your Account Number: "),
        },
        {
            name: "accountPin",
            type: "password",
            message: chalk.rgb(28, 223, 179)("Enter Your Pin Code: "),
        },
    ]);
    let user = users.find((x) => x.accountNumber == askInfo.accountNumber && x.pin == askInfo.accountPin);
    if (typeof user != "undefined") {
        console.log(chalk.rgb(195, 193, 25)(`Welcome ${user.name}`));
        mainScreen(user.balance);
    }
    else {
        console.log(chalk.rgb(195, 53, 25)("You Enter invalid pin or account number"));
    }
}
export default login;
