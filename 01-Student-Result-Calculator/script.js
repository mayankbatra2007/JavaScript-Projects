// Part 1: Take student Info
const studentName = prompt("Enter your name: ");
console.log("Student Name: ", studentName);

// Take marks of Five subjects
// Part 2: Taking subject marks
const javascriptMarks = Number(prompt("Enter JavaScript marks:"));
const pythonMarks = Number(prompt("Enter Python marks:"));
const mathsMarks = Number(prompt("Enter Mathematics marks:"));
const englishMarks = Number(prompt("Enter English marks:"));
const computerMarks = Number(prompt("Enter Computer Science marks:"));
// prompt returns string -> convert it to Number


// Part: 3 Calculate total Marks
const totalMarks = javascriptMarks +
    pythonMarks +
    mathsMarks +
    englishMarks +
    computerMarks;

const maximumMarks = 500;
console.log("Total Marks: "+ totalMarks);
console.log("Maximum Marks: "+ maximumMarks);

// Part: 4 calculate percenatge and avg
const percentage = (totalMarks / maximumMarks) * 100;

const average = totalMarks / 5;

// Round % to 2 decimal places
const finalPercentage = Math.round(percentage * 100) / 100;

console.log("Percentage:", finalPercentage + "%");
console.log("Average:", average);

// Complete Result
// Part 5: Display final result

console.log(`
========== STUDENT RESULT ==========

Student Name: ${studentName}

JavaScript: ${javascriptMarks}
Python: ${pythonMarks}
Mathematics: ${mathsMarks}
English: ${englishMarks}
Computer Science: ${computerMarks}

Total Marks: ${totalMarks}/${maximumMarks}

Percentage: ${finalPercentage}%

Average Marks: ${average}

====================================
`);