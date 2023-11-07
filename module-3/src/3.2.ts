{
    //

    class Person {
        constructor(
            public name:string,
            public age:number,
            public address:string
        ){}
    }

    // OOP inheritance

    class Student extends Person {
       
        constructor(    
             name:string,
             age:number,
             address:string
        ){
           super(name, age, address)
        }

        getSleep(numberOfHours:number){
            console.log(`${this.name} will sleep for ${numberOfHours}.`)
        }
    }


    class Teacher extends Person {
       
        constructor(
             name:string,
             age:number,
             address:string,
            public designation:string
        ){
            super(name, age, address)
        }

        takeClass(numberOfClass:number){
            console.log(`${this} will take ${numberOfClass} per week`);
            
        }
    }



    const student1 = new Student('Rahim', 20, "Uganda")

    const teacher1 = new Teacher("Mr. ZZZ", 40, "Buganda", "Professor")














    //
}