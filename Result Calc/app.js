function gradeCalc() {
    let marks = document.getElementById('number').value;
    const total_marks = 750;

    if (marks > total_marks) {
        alert("Invalid Input: Marks cannot be greater than " + total_marks);
        return;
    }

    let percentage = (marks / total_marks) * 100;

    let result;
    if (percentage >= 80) {
        result = "Congrats You Got Grade A+";
    } else if (percentage >= 70) {
        result = "Grade A";
    } else if (percentage >= 60) {
        result = "Grade B";
    } else if (percentage >= 50) {
        result = "Grade C";
    } else {
        result = "Fail!";
    }

    alert(result);

    console.log("Marks: ", marks);
    console.log("Percentage: ", percentage);
}
