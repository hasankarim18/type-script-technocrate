"use strict";
{
    //
    // nulable type / unknown type
    const searchName = (value) => {
        if (value) {
            console.log('searching ');
        }
        else {
            console.log('Nothing to search');
        }
    };
    searchName(null);
    // unknown typeof
    const getSpeedInMerterPerSecond = (value) => {
        if (typeof value === 'number') {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        }
        else if (typeof value === 'string') {
            const [result, unit] = value.split(' ');
            const convertedSpeed = (parseFloat(result) * 1000) / 3600;
            console.log(convertedSpeed);
        }
        else {
            console.log('wrong input');
        }
    };
    getSpeedInMerterPerSecond(`1000 kmh-1`);
    // nuver type 
    function throwError(msg) {
        throw new Error(msg);
    }
    // throwError('error ')
    // 
}
