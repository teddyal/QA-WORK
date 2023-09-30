findGradeLevel("Teddy", "97");

function findGradeLevel(name, marks) {
  if (marks < 0 || marks > 100) {
    console.log("Invalid marks");
  }
  if (marks >= 90 && marks <= 100) {
    console.log("S grade");
  }
  if (marks >= 80 && marks <= 90) {
    console.log("A grade");
  }
    if (marks >= 70 && marks <= 80) {
        console.log("B grade");
}
if (marks >= 60 && marks <= 70) {
    console.log("C grade");
}if (marks >= 50 && marks <= 60) {
    console.log("D grade");
}
if (marks >= 0 && marks <= 50) {
    console.log("Student has failed");
}

}