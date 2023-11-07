"use strict";
{
    // module 2 
    // type asertion
    //    console.log('type asertion')
    let anything;
    anything = "Next Level Web Development";
    anything = 222;
    //  (anything as number)
    const kgToGram = (value) => {
        if (typeof value === 'string') {
            const convertedValue = parseFloat(value) * (1000);
            return `The converted value is: ${convertedValue}`;
        }
        else if (typeof value === 'number') {
            return value;
        }
    };
    const result1 = kgToGram(1000);
    const result2 = kgToGram('1000');
    try {
    }
    catch (error) {
        console.log(error.message);
    }
}
