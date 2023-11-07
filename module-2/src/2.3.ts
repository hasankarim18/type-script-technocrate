{
 // 
    // ts generics type 

    type GenericArray<T> = Array<T>

    const roolNumber1 : number[] = [12,3,4,5,6]
    const roolNumber2 : Array<number> = [12,3,4,5,6]
    const roolNumber3 : GenericArray<number> = [12,3,4,5,6]

    const mentors1: string[] = ['Mr. x', "Y", "Z"]
    const mentors2: Array<string> = ['Mr. x', "Y", "Z"]
    const mentors3: GenericArray<string> = ['Mr. x', "Y", "Z"]

    const boolArray1: boolean[] = [true, false, true, false, false]
    const boolArray2: Array<boolean> = [true, false, true, false, false]
    const boolArray3: GenericArray<boolean> = [true, false, true, false, false]

    /** Generic Array of object */

    const user : GenericArray<{name:string,age:number}> = [
        {
            name:'Mezba',
            age:100
        },
        {
            name:"Jhankar",
            age:100
        }
    ]

    /** Generic Tuple */
    type GenericTuple <X, Y> = [X, Y]
    const manush1 :[string, string] = ['Mr. X',  "Mrs. X"]
    const manush2 : GenericTuple<string, string> = ['Mr. X',  "Mrs. X"]

    const UserWithId : GenericTuple<number, {name:string, email:string}> = [1234, {name:"Dabul", email:"dabul@mail.com"}]





 //
}