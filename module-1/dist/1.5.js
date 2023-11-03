"use strict";
// Reference type ---> Object , obtional, literal
const user = {
    company: "Programming Hero",
    firstName: "Hasan",
    lastName: "karim",
    // middleName: 'Mahbub ul',
    age: 36,
    isMarried: true,
    address: "Magura" // Literal type   
};
console.log(user.company);
user.company = 'ph';
console.log(user.company);
