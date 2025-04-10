// Part 1: Creating and using an object
const student = {
  name: 'priya upple',
  age: 21,
  enrolled: true,
  courses: ['Math', 'Physics', 'Computer Science'],
  displayInfo() {
    return `Student: ${this.name}, Age: ${this.age}`;
  }
};

console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Display Info:", student.displayInfo());


const jsonString = JSON.stringify(student);
console.log("JSON String:", jsonString);

const parsedStudent = JSON.parse(jsonString);
console.log("Parsed Object:", parsedStudent);


const { name, courses } = student;
console.log("Destructured Name:", name);
console.log("Destructured Courses:", courses);

const scores = [85, 92, 78, 90];
const [score1, score2] = scores;
console.log("Score 1:", score1);
console.log("Score 2:", score2);


const clonedStudent = { ...student, graduationYear: 2025 };
console.log("Cloned Student with Graduation Year:", clonedStudent);

const newCourses = ['Art', 'History'];
const allCourses = [...student.courses, ...newCourses];
console.log("All Courses Combined:", allCourses);


student.addCourse = function(course) {
  this.courses.push(course);
};

student.totalCourses = function() {
  return this.courses.length;
};

student.addCourse('Biology');
console.log("Updated Courses:", student.courses);
console.log("Total Number of Courses:", student.totalCourses());
