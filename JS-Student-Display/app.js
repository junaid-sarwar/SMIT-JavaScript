const students = [
    {
        name: "John Doe",
        semester: 3,
        father_name:"Doe",
        isFeePaid:true,
        courses: ["Mathematics", "Physics", "Computer Science"]
    },
    {
        name: "Jane Smith",
        father_name:"Smith",
        semester: 2,
        isFeePaid:true,
        courses: ["Biology", "Chemistry", "English"]
    },
    {
        name: "Emily Johnson",
        father_name: "Johnson",
        semester: 4,
        isFeePaid:false,
        courses: ["Economics", "Statistics", "Marketing"]
    },
];

const allStudentInfo = document.getElementById("students_information");

for (let i = 0; i < students.length; i++) {
    let student = students[i];
    
    let studentNumber = document.createElement("h2");
    studentNumber.textContent = `Student Number: ${i+1}`;
    allStudentInfo.appendChild(studentNumber);

    let studentName = document.createElement("h3");
    studentName.textContent = `Student Name: ${student.name}`;
    allStudentInfo.appendChild(studentName);

    let semester = document.createElement("h4");
    semester.textContent = `Semester: ${student.semester}`;
    allStudentInfo.appendChild(semester);

    let fatherName = document.createElement("h4");
    fatherName.textContent = `Father Name: ${student.father_name}`;
    allStudentInfo.appendChild(fatherName);

    let feeStatus = document.createElement("h4");
    feeStatus.textContent = `Fee Status: ${student.isFeePaid}`;
    allStudentInfo.appendChild(feeStatus);

    let courses = document.createElement("h4");
    courses.textContent = `Courses:`;
    allStudentInfo.appendChild(courses);

    let coursesList = document.createElement("ul");
    for (let j = 0; j < student.courses.length; j++) {
        let courseItem = document.createElement("li");
        courseItem.textContent = student.courses[j];
        coursesList.appendChild(courseItem);
    }
    allStudentInfo.appendChild(coursesList);

    allStudentInfo.appendChild(document.createElement("hr"))
}