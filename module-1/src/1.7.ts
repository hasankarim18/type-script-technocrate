// spread and rest operator 
{

// spread oparator 
// rest oparation
// desturcturing 


// spread oparator 

const bors1: string[] = ['Mri', 'firoz', 'mizan'];

const bros2: string[] = ['tonmoy', 'nahid', 'rahat']

bors1.push(...bros2)

const mentors1 = {
    typescript: "Mezbah",
    redux: "Mir",
    dbms:"Mizan"
}

const mentors2 = {
    prisma: 'firoz',
    next:'tonmoy',
    cloud:'nahid'
}

const mentorList = {
    ...mentors1,
    ...mentors2
}

// learn rest oparatior

const greetFriends = (...friends:string[]){
    friends.forEach((friend:string) => {
        console.log(`Hi ${friend}`);        
    });
}




}