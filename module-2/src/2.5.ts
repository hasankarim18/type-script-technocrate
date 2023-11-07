{
    //

    /** Functions with generics */

    const createArray = (param:string) :string[] => {
        return [param]
    }

    const createArrayWithGeneric = <T>(param: T): T[]  => {
        return [param]
    }

    const res1 = createArray('Bangladesh')
    const resGeneric = createArrayWithGeneric<string>('Bangladesh')

    type User = {
        id:number;
        name:string
    }

    const resGenericObj = createArrayWithGeneric<User>({id:222,name:"Dabul"})

    /** Tuple */

    const createArrayWithTuple = <T,Q>(param1: T, param2:Q): [T,Q]  => {
        return [param1, param2]
    }

    const res2 = createArrayWithTuple<string, number>('Bangladesh', 100)
    
    type Continent = {
        continent:string;
        area:number
    }

    const resTuple = createArrayWithTuple<string,Continent>('Bangladesh',{
        continent:"Asia",
        area:147
    })

    const addCourseToStudent = <T>(student: T) => {
        const course = 'Nexe Level Web Development'
        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({name:"Mr. X",email:'x@mail.com', devType:"Next Level Web Developer" })
   
    const student2 = addCourseToStudent({name:"Mr. Y", email:"y@mail.com", hasWatch:'Apple Watch'})
    //
}