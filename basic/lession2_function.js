//hàm không có giá trị trả vè,với những hàm này ta sử dụng từ khóa :void
var helloworld = function () {
    console.log("Hello world,I am typescript");
};
helloworld();
var hellTypescript = function (name, age) {
    console.log("Hello world,I am " + name + ",I am " + age);
};
hellTypescript("typescript", 18);
// Hàm tự định nghĩa có giá trị trả về
var tinhtong = function (sothu1, sothu2) {
    var tong = sothu1 + sothu2;
    console.log('tong', tong);
    return tong;
};
tinhtong(1, 2);
function add(sothu1, sothu2) {
    console.log('add :', sothu1 + sothu2);
    return sothu1 + sothu2;
}
add('1', 2);
// Generic : Ngoài cách truyền kiểu dữ liệu trực tiếp cho hàm,ta có thể truyền kiểu dữ liệu qua một biến.
var addType = function (x) {
    return x;
};
addType("Vietro");
