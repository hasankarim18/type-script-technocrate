"use strict";
var _a, _b;
{
    /// 
    // ternary operator || opational operator || nullish coalescing operator 
    const age = 15;
    // if(age >= 18){
    //     console.log('adult');
    // }else {
    //     console.log('not adult');    
    // }
    const isAdult = age >= 18 ? 'adult' : 'not adult';
    // console.log({isAdult});
    /***** nullish coalescing operator */
    // null / undefined --> decision making 
    const isAuthenticated = '';
    const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : 'Guest';
    const result2 = isAuthenticated ? isAuthenticated : 'Guest';
    const user = {
        name: "Hasan",
        address: {
            city: "Dhaka",
            road: "awesome road",
            presentAddress: 'ctg town',
        }
    };
    const permanatAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanatAddress) !== null && _b !== void 0 ? _b : 'No permanat address';
    console.log({ permanatAddress });
    ////
}
