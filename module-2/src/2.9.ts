{
    // 

    /** conditional types */
    type a1 = null
    type a2 = number
    type b1 = undefined

    type x = a1 extends null ? true : false // x -- true  
    type y = a1 extends number ? true : false // x -- false // conditional type 

    //** nested conditional type  */

    type z = a2 extends null ? true: b1 extends  undefined ? undefined : any

    type Sheikh = {
        bike:string;
        car:string;
        ship:string; 
        plane:string;
    }

    // car ase kina // bike ase kina // ship ase kina // tractor ase kina 
    type CheckVehicle <T>  = T extends keyof Sheikh ? true : false

    type HasPlane = CheckVehicle<"plane"> 


    // 
}