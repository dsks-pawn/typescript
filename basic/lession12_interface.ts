// Bản thiết kế kiểu dữ liệu, định nghĩa đặc thù các đối tượng, gom nó lại thành 1 nhóm.
// Tạo tính thống nhất cho dữ liệu
interface nguoi {
    tuoi: number,
    ten?: string
}

function test(motnguoi: nguoi): void {
    console.log(motnguoi);
}
test({ tuoi: 40, ten: "John" })

// ---------------------------------------------

// SỬ DỤNG interface với class
// interface Class --> Khi có 1 class tạo từ interface
// thì class đó phải có tối thiểu đủ các thuộc tính và các hàm
interface tuongInterface {
    name: string
    blood: number
    damage: number
    description: string
    mana: number
    xemtuong(): void;
    donkinang(mau: number): any
    bienve(): void
}

class tuong implements tuongInterface {
    name: string
    blood: number
    damage: number
    description: string
    mana: number
    xemtuong(): void {
        console.log('xemtuong');
    }
    donkinang(mau: number): any {
        return "don ki nang"
    }
    bienve(): void {
        console.log("bien ve");
    }
}