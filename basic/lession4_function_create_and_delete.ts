
// Hàm tạo: là một hàm nhưng có điểm đặc biệt là nó luôn luôn được gọi tới khi ta khởi tạo một đối tượng.
// Hàm hủy: là hàm tự động gọi sau khi đối tượng bị hủy, nó thường được sử dụng để giải phóng bộ nhớ chương trình. Trong đối tượng hàm hủy có thể có hoặc không.
class Sinhvien {
    //cách 1 khai bao tên hàm trùng tên lớp
    Sinhvien() {
    }
    //cách 2 sử dụng constructor
    constructor() {

    }
    // Ta sử dụng từ khóa destruct trước khai báo hàm hủy.
    destruct() {

    }
}
