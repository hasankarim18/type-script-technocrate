{
    // 

    /** Generic interface */

    interface Developer<T, X = null > {
        name:string;
        computer:{
            brand:string;
            model:string;
            releaseYear:number 
        }
        smartWatch: T;
        bike?:X
    }

    type EmilabWatch = {
        brand:string;
        model:string;
        display:string
    }

    const poorDeveloper : Developer<EmilabWatch> = {
        name:"Karim",
        computer:{
            brand:"Hp",
            model:"inspiron",
            releaseYear:2014
        },
        smartWatch: {
            brand:'Emilab',
            model:'kw66',
            display:'OLED'
        }

    }

    type AppleWatch = {
        brand:string;
        model:string;
        heartTrack:boolean;
        sleepTrack:boolean
    }

    interface YamahaBike {
        model:string, 
        engineCapacity:string
    }

    //
    const richDeveloper : Developer<AppleWatch,YamahaBike > = {
        name:"Rich Dev",
        computer:{
            brand:"Asus",
            model:"Tuf ",
            releaseYear:2022
        },
        smartWatch: {
            brand:'Apple Watch',
            model:'something',
            heartTrack:true,
            sleepTrack:true
        },
        bike:{
            model:'Yamaha',
            engineCapacity:'100'
        }

    }


    // 

}