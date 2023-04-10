import inquirer from "inquirer";
import users from "./users_database.js";
import mainScreen from "./main_screen.js";
async function login() {
    let askInfo = await inquirer.prompt([
        {
            name: "accountNumber",
            type: "number",
            message: "Please Enter Your Account Number: ",
        },
        {
            name: "accountPin",
            type: "password",
            message: "Enter Your Pin Code: ",
        },
    ]);
    let user = users.find((x) => x.accountNumber == askInfo.accountNumber && x.pin == askInfo.accountPin);
    if (typeof user != "undefined") {
        console.log(`Welcome ${user.name}`);
        mainScreen(user.balance);
    }
    else {
        console.log("You Enter invalid pin or account number");
    }
}
export default login;
