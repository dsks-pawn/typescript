// Lớp con sau khi kế thừa từ lớp cha sẽ có các thuộc tính và phương thức ở lớp cha.
// Ta sử dụng từ khóa extends thể hiện tính kế thừa này.
class Cha {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    noi(): void {
        console.log('action nói');
    }
}

// Trong hàm tạo của class Con, ta buộc phải gọi lại hàm tạo của class Cha bằng từ khóa super

class Con extends Cha {
    constructor(name: string, age: number) {
        super(name, age);
        // Sau khi kế thừa từ lớp cha,ta có thể gọi các thuộc tính và phương thức ở lớp con bằng từ khóa:
        // this.ten_phuong_thuc//ten_thuoc_tinh
        // Gọi trong lớp con:
    }
    hoc(): void {
        console.log('action học');
    }
    quanlysv() {
        this.name = "Angela";
        this.age = 18
    }
}

var con1 = new Con();
con1.noi();


//Kế thừa lồng 
class A {
    name: string
    age: number
    address: string
    constructor(name: string, age: number, address: string) {

    }
    intellect() {

    }
    experience() {

    }
    blood() {

    }
}

class B extends A {
    strength() {

    }
    agile() {

    }
}

class C extends B {
    innocent() {

    }
}