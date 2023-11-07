{
    //
    /** ******** class and object */
    // oop - class 

    class Animal {
      // typescript paramerter properties
        constructor(
            public name:string, 
            public species:string,
            public sound:string)
            {
           
        }

        // function === method 

        makeSoound(){
            console.log(`The Sound of "${this.name}" is: "${this.sound}"`)            
        }
    }

    const dog = new Animal("German Shephard", "Dog", "Bark")
    const cat = new Animal('Persian ', "Cat", "Meaw")

    dog.makeSoound()




    


    //
}