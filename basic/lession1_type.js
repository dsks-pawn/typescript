var typeString = 'tao dang test';
var typeNumber = 69;
var typeBoolean = true;
var typeArray = [true, false, true, false];
var typeArray2 = [true, false, true, false];
// type Tuple : mảng các giá trị nhưng mỗi giá trị lại có thể có một kiểu dữ liệu khác nhau.
var stringArray = ['test', 18, 'Thành Nguyễn'];
// type Enum : dùng để tạo một nhóm tên tương ứng với các giá trị là những con số mà ta thiết lập cho nó.
var Hello;
(function (Hello) {
    Hello[Hello["Xinchao"] = 15] = "Xinchao";
    Hello[Hello["Hi"] = 16] = "Hi";
    Hello[Hello["Bonjour"] = 17] = "Bonjour";
    Hello[Hello["Ok"] = 18] = "Ok";
})(Hello || (Hello = {}));
;
console.log("test thu template string " + Hello.Xinchao);
// type Any : cho phép chúng ta khai báo một giá trị khi chúng ta chưa biết giá trị trả vè ở kiểu dữ liệu nào
// -- e.g 1
var vietpro = 'Welcome to TypeScript';
vietpro = 18;
// -- e.g 2
var anyArray = ['TypeScript', 18, true];
// type Void : khai báo 1 function không có giá trị trả về.Thực chất nó là kiểu dữ liệu với giá trị null hoặc undefined.
function showAlert() {
    alert("Welcome to Tyescript");
}
