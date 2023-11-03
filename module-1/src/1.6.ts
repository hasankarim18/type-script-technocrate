// Function in typescript 
// 

// ## Normal function 
// ## arrow function 
function add(num1:number, num2:number = 10 ){
    return num1 + num2
}

const total = add(2,3)

console.log(total);

const addArrow = (num1:number, num2:number):number =>  num1+num2

// object --> function --> method 

const poorUser = {
    name:"Hasan",
    balance:0,
    addBallance(balance:number):string{
        return `My new balance is: ${this.balance + balance}`
    }
}


const arr : number[] = [1,4,10]

const newArr:number[] = arr.map((elem:number):number => elem*elem)