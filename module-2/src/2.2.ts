{
//
// interface 
type User1 = {
    name:string;
    age:number;
}

type UserWithRole = User1 & {role: string} 

const user1 : UserWithRole = {
    name:"Karim",
    age:22,
    role:'admin'
}

/** Interface */

interface User2  {
    name:string;
    age:number
}

interface UserWithRole2 extends User2 { // you can extends interface with interface
    role:string 
}
interface UserWithRole3 extends User1 { // you can extends type with interface
    role:string 
}

const user2: User2 = {
    name:"Mahbub",
    age:40
}

const user3 : UserWithRole2 = {
    name:"Dabul",
    age:33,
    role:'helper'
}

// js --> object, array --> object 

type Roll1 = number[]

const rollNumber : Roll1 = [1,2,3]

interface Roll2 {
    [index:number]:number
}

const rollNumber2 : Roll2 = [5,6,7]


// Function with interface 
type Add = (num1:number, num2:number) => number 
interface Add2 {
    (num:number, number:number): number
}

const add : Add2 = (num1,num2) => num1+num2






//
}