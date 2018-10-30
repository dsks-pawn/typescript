class General {
    username: string
    description: string
    skill: Array<string>
    constructor(username: string, description: string, skill: string[]) {
        this.username = username
        this.description = description
        this.skill = skill
    }
    show() {
        return `${this.username} - ${this.description} - ${this.skill}`
    }
    show2(): void {
        let thongSo = `${this.username} - ${this.description} - ${this.skill}`
        console.log(thongSo)
    }
}

let Aatrox = new General('Aatrox', 'Quỷ Kiếm Darkin', ['Bể Máu', 'Không Kích Hắc Ám', 'Khát Máu / Nợ Máu'])
console.log(Aatrox.show());

//Sử dụng extends mặc định hàm là sẽ kế thừa, muốn định nghĩa lại thì ghi đè lên
// trong constructor muốn sử dụng giá trị ở trên phải sử dụng super
class SatThu extends General {
    skillSatThu: string;
    constructor(username: string, description: string, skill: string[], skillSatThu: string) {
        super(username, description, skill)
        this.skillSatThu = skillSatThu
    }
    show() {
        return `${this.username} - ${this.description} - ${this.skill} - ${this.skillSatThu}`
    }
    show2(): void {
        // sử dụng lại code ở show2 hàm cha
        super.show2()
        // định nghĩa thêm
        console.log(" Đòn sát thủ: " + this.skillSatThu)
    }
}

let Akali = new SatThu('Akali', 'Nắm Đấm Bóng Đêm', ['Bể Máu', 'Không Kích Hắc Ám', 'Khát Máu / Nợ Máu'], 'Sát thủ vô hình')
console.log(Akali.show());
Akali.show2()
