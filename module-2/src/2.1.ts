{
    // module 2 
    // type asertion
//    console.log('type asertion')
    let anything : any;
     anything = "Next Level Web Development";
    anything = 222;
  //  (anything as number)

  const kgToGram = (value:string | number) : string | number | undefined => {
    if(typeof value === 'string'){
       const convertedValue = parseFloat(value)*(1000)
       return `The converted value is: ${convertedValue}`
    }else if(typeof value === 'number'){
        return value
    }
  }

  const result1 = kgToGram(1000) as number 
  const result2 = kgToGram('1000')as string

  type CustomError = {
    message: string
  }

  try {
    
  } catch (error) {
    console.log((error as CustomError).message);
    
  }

}