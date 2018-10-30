

class gameCharacter {
    name: string;
    age: number;
    blood: number;
    level: number;
    constructor(name: string, age: number, blood: number, level: number) {
        this.name = name;
        this.age = age;
        this.blood = blood;
        this.level = level;
    }
    chem() { }
    xoay() { }
    dam() { }
    showName() {
        return `Nhân vật: ${this.name}, tuổi: ${this.age}, máu: ${this.blood}, level: ${this.level}`
    }
}

let nhanVat1 = new gameCharacter('JossCrooked', 18, 5000, 96)
console.log(nhanVat1);
console.log(nhanVat1.showName());





enum state {
    create = 10,
    processing,
    finish
}

class congViec {
    id: number;
    ten: string;
    trangthai: state;

    constructor(id: number, ten: string, trangthai: state) {
        this.id = id;
        this.ten = ten
        this.trangthai = trangthai
    }

    inThongTin() {
        return `Id: ${this.id} - Tên : ${this.ten} - Trạng thái: ${this.trangthai}`
    }
}
let cv1 = new congViec(1, 'Học Html', state.processing)
console.log(cv1.inThongTin());

