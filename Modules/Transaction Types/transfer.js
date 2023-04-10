import inquirer from "inquirer";
import users from "../users_database.js";
async function transfer(balance) {
    let askamt = await inquirer.prompt([
        {
            name: "transferAcount",
            type: "number",
            message: "Enter Acount Number: ",
        },
        {
            name: "transferAmount",
            type: "number",
            message: "Enter Your Amount",
        },
    ]);
    let user = users.find((x) => x.accountNumber == askamt.transferAcount);
    if (typeof user != "undefined") {
        balance -= askamt.transferAmount;
        console.log("Your Transction is Successful!!");
    }
    else {
        console.log("You Enter invalid account number");
    }
    return balance;
}
export default transfer;
