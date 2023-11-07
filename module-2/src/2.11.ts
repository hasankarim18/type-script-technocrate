{
    // 
    /** utility type */

    // Pick  --- 

    type Person = {
        name:string;
        age:number;
        email?:string;
        contactNo:string;
    }

    // | === union === and

    type NameAge = Pick<Person, "name" | "age">

    // omit 

    type ContactInfo = Omit<Person, "name" | "age">

    // Require utility 

    type PersonRequire = Required<Person>

    // Partial 

    type PersonPertial = Partial<Person>

    // ReadOnly 

    type PersonReadOnly = Readonly<Person>

    const person1:PersonReadOnly = {
        name:"Mr. Xy",
        age:200,
        contactNo:"12345"
    }

  //  person1.name = "Mr. Abc" // you can't edit this object 


  /********************************* Record type */
//   type MyObj = {
//     a:string;
//     b:string;
//   }

type MyObj = Record<string, string>

const EmptyObj : Record<string, unknown> = {}




  const obj1: MyObj = {
    a:"aa",
    b:"cc",
    c:"cc"
  }

    


    // 
}