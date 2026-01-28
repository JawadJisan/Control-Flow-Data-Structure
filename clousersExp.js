function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit: (amount) => {
            balance += amount
            return balance
        },
        withdraw: (amount) => {
            balance -= amount
            return balance
        },
        getBalance: () => balance
    }
}

const myAccount = createBankAccount(1000)

console.log(myAccount.deposit(500))
console.log(myAccount.withdraw(700))
console.log(myAccount.getBalance())