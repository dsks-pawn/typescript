//Ta sử dụng từ khóa this vào tạo ra các thuộc tính cho object
function student(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
}
var student1 = new student('Angela', 18, 'TypeScript');
console.log('student1.name :', student1.name);
// Class :  không phải là 1 đối tượng,có thể hiểu class là một mô tả trạng thái, hành động của đối tượng đó.
// Ví dụ: Trong class Student ta tạo ra 1 phương thức là study
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.study = function () {
        console.log("Learning TypeScript");
    };
    Student.prototype.exercise = function () {
        //thực hiện hành động
    };
    return Student;
}());
var Student1 = new Student();
Student1.name = 'Angela';
Student1.age = 18;
Student1.course = 'TypeScript';
Student1.study();
