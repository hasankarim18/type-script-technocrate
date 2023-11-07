"use strict";
{
    //
    /** Functions with generics */
    const createArray = (param) => {
        return [param];
    };
    const createArrayWithGeneric = (param) => {
        return [param];
    };
    const res1 = createArray('Bangladesh');
    const resGeneric = createArrayWithGeneric('Bangladesh');
    const resGenericObj = createArrayWithGeneric({ id: 222, name: "Dabul" });
    /** Tuple */
    const createArrayWithTuple = (param1, param2) => {
        return [param1, param2];
    };
    const res2 = createArrayWithTuple('Bangladesh', 100);
    const resTuple = createArrayWithTuple('Bangladesh', {
        continent: "Asia",
        area: 147
    });
    const addCourseToStudent = (student) => {
        const course = 'Nexe Level Web Development';
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({ name: "Mr. X", email: 'x@mail.com', devType: "Next Level Web Developer" });
    const student2 = addCourseToStudent({ name: "Mr. Y", email: "y@mail.com", hasWatch: 'Apple Watch' });
    //
}
