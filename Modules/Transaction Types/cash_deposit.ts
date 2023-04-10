import inquirer from "inquirer";


async function cashDeposit(balance: number){
    let askAmount = await inquirer.prompt([
        {
            name: 'amt',
            type: 'number',
            message: 'Enter Your Amount'
        }
    ]);
    balance += askAmount.amt;
    return balance;
}

export default cashDeposit;