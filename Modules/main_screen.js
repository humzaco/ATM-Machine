import inquirer from "inquirer";
import cashWidthdarw from "./Transaction Types/cash_widthdraw.js";
async function mainScreen(balance) {
    let askOption = await inquirer.prompt([
        {
            name: "menu",
            type: "list",
            choices: ['Balance Inquriy', 'Cash Widthdraw', 'Cash Deposit', 'Tranfer', 'Exit'],
            message: "Please Select Your Transaction Type."
        }
    ]);
    switch (askOption.menu) {
        case "Balance Inquriy":
            console.log(`Your current balance is: ${balance}`);
            break;
        case "Cash Widthdraw":
            await cashWidthdarw(balance);
            break;
        case "Cash Deposit":
            console.log("Cash Deposit");
            break;
        case "Tranfer":
            console.log("Tranfer");
            break;
        case "Exit":
            console.log("Exit");
            break;
    }
}
export default mainScreen;
