
const studentName = document.getElementById("studentName");
const studentMark = document.getElementById("studentMark");
const submitBtn = document.getElementById("submitBtn");
const result = document.getElementById("result");
const studentList = document.getElementById("studentList");


submitBtn.addEventListener("click", function () {

    
    const name = studentName.value;
    const mark = parseInt(studentMark.value);

    
    if (name === "" || isNaN(mark)) {
        result.textContent = "Please enter both name and mark.";
        return;
    }

    if (mark < 0 || mark > 100) {
        result.textContent = "Mark must be between 0 and 100.";
        return;
    }

    // Determining result and grade
    let status = "";
    let grade = "";

    if (mark >= 80) {
        status = "PASS";
        grade = "Distinction";
    }
    else if (mark >= 65) {
        status = "PASS";
        grade = "Merit";
    }
    else if (mark >= 50) {
        status = "PASS";
        grade = "Pass";
    }
    else {
        status = "FAIL";
        grade = "Fail";
    }

    // Displaying ouput
    result.textContent =
        `${name} scored ${mark}% - ${status} (${grade})`;

    
    const li = document.createElement("li");

    li.textContent =
        `${name} - ${mark}% - ${status} (${grade})`;

    // Add item to list
    studentList.appendChild(li);

    // Clear inputs
    studentName.value = "";
    studentMark.value = "";
});