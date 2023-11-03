"use strict";
// Function in typescript 
// 
// ## Normal function 
// ## arrow function 
function add(num1, num2 = 10) {
    return num1 + num2;
}
const total = add(2, 3);
console.log(total);
const addArrow = (num1, num2) => num1 + num2;
// object --> function --> method 
const poorUser = {
    name: "Hasan",
    balance: 0,
    addBallance(balance) {
        return `My new balance is: ${this.balance + balance}`;
    }
};
const arr = [1, 4, 10];
const newArr = arr.map((elem) => elem * elem);
