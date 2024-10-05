// Prompting the user to input their Name, Address, Age, Class Role, and Course
let fname = prompt("Enter your Name:");   // User's name
let address = prompt("Enter your Address:");   // User's address
let age = parseInt(prompt("Enter your Age:"));  // User's age
let classRole = prompt("Enter your Class Role (Officer, Student, Teacher):");   // User's role in the class
let course = prompt("Enter your Course (BSCS, BSM, BAEL):");   // User's course of study

// Checking if the entered course is one of the recognized ones (BSCS, BSM, or BAEL)
if (course === "BSCS" || course === "BSM" || course === "BAEL") {
    // Nested conditional: Check if the user is an Officer, Student, or Teacher
    if (classRole === "Officer") {
        alert("Welcome Officer, " + fname + "! You're enrolled in " + course);  // Officer-specific greeting
        // Looping based on 1/4 of the user's age and showing the Officer's name
        for (let i = 0; i < Math.floor(age / 4); i++) {
            alert("Officer: " + fname);  // Repeating the Officer's name
        }
    } else if (classRole === "Student") {
        console.log("Welcome Student, " + fname + "! You're enrolled in " + course);  // Student-specific greeting
        // Loop to print the Student's name
        for (let i = 0; i < Math.floor(age / 4); i++) {
            alert("Student: " + fname);  // Repeating the Student's name
        }
    } else if (classRole === "Teacher") {
        console.log("Welcome Teacher, " + fname + "! You're teaching in " + course);  // Teacher-specific greeting
        // Loop to print the Teacher's name
        for (let i = 0; i < Math.floor(age / 4); i++) {
            alert("Teacher: " + fname);  // Repeating the Teacher's name
        }
    } else {
        // Default case for unrecognized roles
        console.log("Class Role not recognized, using default.");
        // Looping with a default role message
        for (let i = 0; i < Math.floor(age / 4); i++) {
            alert("Default Role: " + fname);  // Repeating the name with a default role
        }
    }
} else {
    // Fallback for unrecognized course input
    alert("Course not recognized. Please enter a valid course (BSCS, BSM, BAEL).");
}
