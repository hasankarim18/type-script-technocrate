{
    // 
    // union type  | or 
    // string literal type 
    type FrontendDeveloper = 'fakibazDeveloper' |'juniorDeveloper'
    type FullStackDeveloper = 'frontendDeveloper' |'expertDeveloper'

    type Developer = FrontendDeveloper | FullStackDeveloper

    const newDeveloper : FrontendDeveloper = 'juniorDeveloper'

   type User = {
    name:string,
    email?:string, 
    gender: "male" | "female"
    bloodGroup: "A" | "B" | "O"
   }

   const userOne : User ={
    name:"Dabul",
   // email: "dabul@mail.com",
    gender:"male",
    bloodGroup:"A"
   }

   // intersection type === common property 

   type BackendDeveloper = {
    skills: string[];
    designation1:'BackendDeveloper';   
   }

   type ReactDeveloper = {
    skills: string[];
    designation2:'ReactDeveloper'; 
   }

   type Mern = BackendDeveloper & ReactDeveloper 

   const mernDeveloper : Mern = {
    skills: ['Html', 'css', 'express'],
    designation1:'BackendDeveloper',
    designation2:"ReactDeveloper"
   }





    // 
}