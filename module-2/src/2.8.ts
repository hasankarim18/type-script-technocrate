{
    // 

    // simulate

    const url = "https://jsonplaceholder.typicode.com/todos/2"

    type TodoType = {
        id:number;
        userId:number;
        title:string;
        completed:boolean;
    }

    const getTodo =async () : Promise<TodoType> => {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data);
        return data        
    }

    getTodo()

    type Something = {something: string}

    const createPromise = () : Promise<Something> => {
        return new Promise<Something>((resolve, reject) => {
            const data : Something = {something: "some text"}
         //   const data : string = null

            if(data){
                resolve(data)
            }else {
                reject('Failed to load data')
            }
        })
    }


    // calling createPromise function

    const showData =async () : Promise<Something> => {
        const  data : Something = await createPromise()
       // console.log(data);        
       console.log(data);
       
        return data 
    }

   // showData()


    //
}