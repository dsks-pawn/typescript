//hàm không có giá trị trả vè,với những hàm này ta sử dụng từ khóa :void
const helloworld = (): void => {
    console.log("Hello world,I am typescript");
}
helloworld();

const hellTypescript = (name: string, age: number): void => {
    console.log("Hello world,I am " + name + ",I am " + age);
}
hellTypescript("typescript", 18);

//---------------------------------------------------------
// Hàm tự định nghĩa có giá trị trả về

const tinhtong = (sothu1: number, sothu2: number): number => {
    var tong = sothu1 + sothu2;
    console.log('tong', tong);
    return tong;
}
tinhtong(1, 2);
//---------------------------------------------------------
// Overload :  giúp ta sử dụng tên hàm nhưng với các kiểu tham số khác nhau.

function add(sothu1: number, sothu2: number): number;
function add(sothu1: number, sothu2: string): number;
function add(sothu1: string, sothu2: number): number;

function add(sothu1, sothu2) {
    console.log('add :', sothu1 + sothu2);
    return sothu1 + sothu2;
}
add('1', 2)
//---------------------------------------------------------
// Generic : Ngoài cách truyền kiểu dữ liệu trực tiếp cho hàm,ta có thể truyền kiểu dữ liệu qua một biến.

const addType = <T>(x: T): T => {
    return x;
}
addType<string>("Vietro");