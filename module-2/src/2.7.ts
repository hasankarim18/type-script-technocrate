{
    //
    /** generic contraints with keyof operator */

    type Vehicle = {
        bike:string;
        car:string;
        ship:string; 
    }

    type Owener = "bike" | "Car" | "ship" // manually 

    // union type
    // both Owner and Owner is same

    type Owener2 = keyof Vehicle

    const person : Owener2 = "bike"

    const user = {
        name:"Mr. Kabul",
        age:26,
        address:'Dhk'
    }


    const getPropertyValue = <X, Y extends keyof X > (obj:X, key:Y)=> {
        return obj[key];
    }
   

    const result1 = getPropertyValue(user, 'name')


    //
}