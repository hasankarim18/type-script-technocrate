{
    // 
    /** Constraints  === force to something*/

    const addCourseToStudent = <T extends {id:number, name:string, email:string} >(student: T) => {
        const course = 'Nexe Level Web Development'
        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({
        id:222,
        name:"Mr. X",
        email:'x@mail.com',
         devType:"Next Level Web Developer" 
        })
   
    const student2 = addCourseToStudent({
        id:333,
        name:"Mr. Y", 
        email:"y@mail.com", 
        hasWatch:'Apple Watch'
    })





    //
}