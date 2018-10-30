// Khai báo kiểu thường
function xem1(x: number): number {
    return x
}
// Generic : Ngoài cách truyền kiểu dữ liệu trực tiếp cho hàm, ta có thể truyền kiểu dữ liệu qua một biến.
function xem2<T>(x: T): T {
    return x
}
console.log(xem2<string>("Đây là kiểu string"))

//---------------------------------------------------------
class mayTinh {
    // muốn truy nhập trực tiếp thì sử dụng static không phải thông qua gì hết
    static xemThongtin<T>(x: T[]): void {
        console.log(x);
    }
    xemThongtin2<T>(x: T[]): void {
        console.log(x);
    }
}
//Sử dụng static
mayTinh.xemThongtin<string>(["Dell", "Macbook", "HP"])
//or
mayTinh.xemThongtin<any>(["Dell", 23, "HP"])

//Không sử dụng static, thông qua maytinhPC
let mayTinhPC = new mayTinh()
mayTinhPC.xemThongtin2<string>(["Dell", "Macbook", "HP"])