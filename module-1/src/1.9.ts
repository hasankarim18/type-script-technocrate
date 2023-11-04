{

    //## 
    // type alias  

    type Student = {
        name:string;
        age:number;
        gender:string;
        contactNo?:string;
        address:string 
    } 

    const student1: Student = {
        name: "Hasan",
        age:30,
        gender:"male",
        contactNo:'01700000000',
        address:'Dhk'
    }

    const student2: Student ={
        name:'Karim',
        age:20,
        gender:"male",
        address:"Ctg"
    }


    const student3 : Student={
        name:'Karim',
        age:20,
        gender:"male",
        address:"Ctg"
    }

    type UserName = string 

    const userName : UserName = "Mahbub"

    type IsAdmin = boolean 

    const isAdmin : IsAdmin = false  

    // type alias in function 

    // const add = (num1:number , num2:number): number => num1 + num2

    type Add = (num1:number, num2:number) => number 

     const add:Add = (num1 , num2) => num1 + num2


    //

}