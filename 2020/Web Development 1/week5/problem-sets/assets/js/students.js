let students = [{
        name: "Diksha Dohman",
        age: 20,
        major: "Communications Technology",
        coursesTaken: ["CT 101", "CT 210", "CT 137", "CT 205"],
        totalCredits: 75,
        enrolled: true
    },
    {
        name: "Voski Dreher",
        age: 24,
        major: "Communications Technology",
        coursesTaken: ["CT 101", "CT 160", "CT 201", "CT 210", "CT 137", "CT 205", "CT 240", "CT 355", "CT 345"],
        totalCredits: 110,
        enrolled: true
    },
    {
        name: "Divya Glas",
        age: 19,
        major: "Communications Technology",
        coursesTaken: ["CT 101"],
        totalCredits: 15,
        enrolled: false
    },
    {
        name: "Theofanis Sandoval",
        age: 20,
        major: "Communications Technology",
        coursesTaken: ["CT 101", "CT 201", "CT 137", "CT 160", "CT 360", "CT 370", "CT 381", "CT 385"],
        totalCredits: 95,
        enrolled: true
    },
    {
        name: "Wolf Shepard",
        age: 21,
        major: "Communications Technology",
        coursesTaken: ["CT 101", "CT 201", "CT 137", "CT 160", "CT 360"],
        totalCredits: 45,
        enrolled: false
    }
]


//Complete the functions below
//All functions take the above students array of objects as an argument.
//Create a ctCourseCount function that console logs the student's name and the number of courses taken.
//Use a for loop for this function
//For example: “Voski Dreher has taken 9 courses in CT.”
function ctCourseCount(studarr) {
    for (let i = 0; i < studarr.length; i++) {
        // let statement = `${studarr["name"]} has taken ${studarr["coursesTaken".length]} in ${studarr["major"]}`;
        // console.log(statement);
        console.log(`${studarr[i].name} has taken ${studarr[i].coursesTaken.length} courses in CT.`)
    }
}
console.log("*******************");
console.log("Number 1");
ctCourseCount(students);





//Create a second version of the function above but use 
//A forEach method instead of a for loop
function ctCourseCountforEach(studarr) {

    studarr.forEach(function (student) {
        console.log(`${student.name} has taken ${student.coursesTaken.length} coures.`);
    });
}
console.log("*******************");
console.log("Number 2");
ctCourseCountforEach(students);




//CT students not enrolled function
//the console prints a list of students that are not enrolled. 
function isNotEnrolled(studarr) {

    for (let i = 0; i < studarr.length; i++) {
        if (!studarr[i].enrolled) {
            console.log(`${studarr[i].name} is not enrolled`);
        }
    }

}
console.log("*******************");
console.log("Number 3");
isNotEnrolled(students);
// if student enrolled != enroled true




//CT courses taken listed function
//When called, the console prints a list of students and every course that student has taken. 
//For example, “Wolf Shepard has taken: CT 101, CT 201, CT 137, CT 160, CT 360”
function coursesTaken(studarr) {

    studarr.forEach(function (student) {
        console.log(`${student.name} has taken ${student.coursesTaken}`);
    });

}
console.log("*******************");
console.log("Number 4");
coursesTaken(students);
console.log("*******************");