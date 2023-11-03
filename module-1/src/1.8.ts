// destructuring 

{

const user = {
    id:345,
    name:{
        firstName:"Hasan",
        middleName:"Mahbub Ul",
        lastName:"karim"
    },
    contactNo:1234567898,
    address:"Magura"
}

// you can't declare type when you are destrucring 
const {
    contactNo,
     name:{middleName :midName}
    } = user


/*************** Array desturcturing */

const myFriends = ['chandler', 'joey', 'ross', 'rachel', 'monika', 'phoebe']

const [, , bestFriend, ...rest] = myFriends

console.log(rest);



}