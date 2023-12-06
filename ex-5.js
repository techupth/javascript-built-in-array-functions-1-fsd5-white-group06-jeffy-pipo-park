const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  let test = students.reduce(
    (accumulator, currentValue) => accumulator + currentValue.score,
    0
  );
  console.log(students.length);
  console.log(test);
  test = test / students.length;
  console.log(test);
  return test;
}

getAverageStudentScore(students); // Output: 87.5
