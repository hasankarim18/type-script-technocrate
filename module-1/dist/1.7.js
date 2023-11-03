"use strict";
// spread and rest operator 
{
    // spread oparator 
    // rest oparation
    // desturcturing 
    // spread oparator 
    const bors1 = ['Mri', 'firoz', 'mizan'];
    const bros2 = ['tonmoy', 'nahid', 'rahat'];
    bors1.push(...bros2);
    const mentors1 = {
        typescript: "Mezbah",
        redux: "Mir",
        dbms: "Mizan"
    };
    const mentors2 = {
        prisma: 'firoz',
        next: 'tonmoy',
        cloud: 'nahid'
    };
    const mentorList = Object.assign(Object.assign({}, mentors1), mentors2);
    // learn rest oparatior
    const greetFriends = (...friends) => {
        friends.forEach((friend) => {
            console.log(`Hi ${friend}`);
        });
    };
}
