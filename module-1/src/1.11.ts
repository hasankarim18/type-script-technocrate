{
/// 


// ternary operator || opational operator || nullish coalescing operator 

const age : number = 15

// if(age >= 18){
//     console.log('adult');
// }else {
//     console.log('not adult');    
// }

const isAdult = age >=18 ? 'adult' : 'not adult'

// console.log({isAdult});

/***** nullish coalescing operator */

// null / undefined --> decision making 

const isAuthenticated = ''; 

const result1 = isAuthenticated ?? 'Guest'
const result2 = isAuthenticated ? isAuthenticated :'Guest'
// console.log({result1}, {result2})

// optional chaining 
type User = {
    name: string;
    address: {
        city:string;
        road:string;
        presentAddress:string;
        permanatAddress?:string
    }
}

const user:User = {
    name:"Hasan",
    address:{
        city:"Dhaka",
        road:"awesome road",
        presentAddress:'ctg town',
    }
}

const permanatAddress = user?.address?.permanatAddress ?? 'No permanat address'

console.log({permanatAddress});



////
}