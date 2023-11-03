
// Reference type ---> Object , obtional, literal

const user : {
    company:string;
    firstName:string;
    lastName:string;
    middleName?:string; // optional type
    age:number;
    isMarried:boolean,
    address:"Magura"
} = {
    company:"Programming Hero",
    firstName: "Hasan",
    lastName: "karim",
   // middleName: 'Mahbub ul',
    age: 36,  
    isMarried:true,
    address:"Magura" // Literal type   
}
console.log(user.company)
user.company = 'ph'
console.log(user.company);


