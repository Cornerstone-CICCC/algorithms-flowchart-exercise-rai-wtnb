const getGradeFromMarks = (marks) => {
  if (marks >= 80) {
    return "A";
  }
  if (marks >= 60 && marks < 80) {
    return "B";
  }
  if (marks >= 40 && marks < 60) {
    return "C";
  }
  return "No Grade";
};

const inputName = "rai";
const inputMarks = 100;

const grade = getGradeFromMarks(inputMarks);
console.log(`${inputName} is ${grade}.`);
