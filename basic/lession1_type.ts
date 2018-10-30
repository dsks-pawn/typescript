var typeString: string = 'tao dang test'
var typeNumber: number = 69
var typeBoolean: boolean = true
var typeArray: boolean[] = [true, false, true, false]
var typeArray2: Array<boolean> = [true, false, true, false]

//---------------------------------------------------------

// type Tuple : mảng các giá trị nhưng mỗi giá trị lại có thể có một kiểu dữ liệu khác nhau.
var stringArray: [string, number, string] = ['test', 18, 'Thành Nguyễn'];

//---------------------------------------------------------

// truyền tham số vào function kiểu object
function xemtt(motnguoi: { tuoi: number, ten: string }): void {
    console.log(motnguoi);
}
xemtt({ tuoi: 40, ten: "John" })

// type Enum : dùng để tạo một nhóm tên tương ứng với các giá trị là những con số mà ta thiết lập cho nó.
enum Hello { Xinchao = 15, Hi, Bonjour, Ok };
console.log(`test thu template string ${Hello.Xinchao}`);

//---------------------------------------------------------


// type Any : cho phép chúng ta khai báo một giá trị khi chúng ta chưa biết giá trị trả vè ở kiểu dữ liệu nào

// -- e.g 1
var vietpro: any = 'Welcome to TypeScript';
vietpro = 18;

// -- e.g 2
var anyArray: any[] = ['TypeScript', 18, true];

//---------------------------------------------------------


// type Void : khai báo 1 function không có giá trị trả về.Thực chất nó là kiểu dữ liệu với giá trị null hoặc undefined.

function showAlert(): void {
    alert("Welcome to Tyescript");
}

//---------------------------------------------------------

// Ép kiểu

let kieu1: any
kieu1 = 'day la 1 string'

console.log((<string>kieu1).length);
// or
console.log((kieu1 as string).length)


