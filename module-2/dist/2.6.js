"use strict";
{
    // 
    /** Constraints  === force to something*/
    const addCourseToStudent = (student) => {
        const course = 'Nexe Level Web Development';
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({
        id: 222,
        name: "Mr. X",
        email: 'x@mail.com',
        devType: "Next Level Web Developer"
    });
    const student2 = addCourseToStudent({
        id: 333,
        name: "Mr. Y",
        email: "y@mail.com",
        hasWatch: 'Apple Watch'
    });
    //
}
