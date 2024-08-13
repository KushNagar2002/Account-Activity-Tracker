// const ele = document.getElementById("container");
// ele.innerHTML = "Hello JS"; 

// document.getElementById('container').innerHTML = "From Script File"; 

// const ele = document.getElementById('container');
// function click(){
//     document.getElementById('container').innerHTML = "Paragraph Changed";
// }

// Array.prototype.mypush = function(item) {
//     this[this.length] = item;
//     return this;
// }

// const fruits = ['🍌', '🍐', '🍓', '🍪'];
// fruits.mypush('🥝');

// console.log(fruits)

// const actor = {
//     name: 'ABC',
//     age: 29,
//     networth: 200000
// }

// console.log("Keys: ",Object.keys(actor));
// console.log("Values: ",Object.values(actor)); 

class Bank {
    constructor(amount) {
        this.balance = amount;
        this.updateDisplay();
    }

    withdraw(amount) {
        if (this.balance == 0) {
            // console.log("Can't Withdraw");
            this.insuff("Can't Withdraw");
        }
        else if (amount > this.balance) {
            // console.log("Insufficient Funds");
            this.insuff("Insufficient Funds");
        }
        else {
            this.balance -= amount;
            this.updateDisplay("withdraw");
        }
    }

    deposit(amount) {
        this.balance += Number(amount);
        this.updateDisplay("deposit");
    }

    updateDisplay(str) {
        let finalAmount= parseFloat(this.balance);
        document.getElementById('balance').innerText = `Balance : ${finalAmount.toFixed(2)}`;

        if (str === 'deposit') {
            const a = document.getElementById('text');
            a.style.display = 'block';

            a.innerText = "Congratulations! Amount has been credited successfully";

            setTimeout(function() {
                a.style.display = 'none';
            }, 2000); 
        }
        else if (str === "withdraw") {
            let a = document.getElementById('text');
            a.style.display = 'block';

            a.innerText = "Amount has been debited successfully!";

            setTimeout(function() {
                a.style.display = 'none';
            }, 2000); 
        }

    }

    insuff(str){
        let a = document.getElementById('text');
        a.style.display = 'block';
        a.innerText = str;

        setTimeout(function() {
            a.style.display = 'none';
        }, 2000);
    }

}

const myBank = new Bank(0);

function handleDeposit() {
    let a = document.getElementById('deposit').value;
    myBank.deposit(a);

    document.getElementById('deposit').value = '';
}

function handleWithdraw() {
    let a = document.getElementById('withdraw').value;
    myBank.withdraw(a);

    document.getElementById('withdraw').value = '';
}