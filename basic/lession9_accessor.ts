class hero {
    private _tenNV: string;
    constructor(_tenNV: string) {
        this._tenNV = _tenNV
    }
    // command line : tsc --target es5 lession9_accessor.js --watch
    // sử dụng get để lấy tên nv Private
    public get tenNV(): string {
        return this._tenNV
    }
    // sử dụng get để change tên nv Private
    public set tenNV(changeName: string) {
        this._tenNV = changeName;
    }

}
let zeus = new hero('Zeus')
console.log(zeus.tenNV);
zeus.tenNV = "đổi tên nhân vật Private không thành công"
console.log(zeus.tenNV);

//---------------------------------------------------------

// Thử với điều kiện
class Nhanvat {
    username: string
    private _pasword: string
    constructor(username: string, _password: string) {
        this.username = username
        this._pasword = _password
    }
    public get password(): string {
        if (this._pasword == "Matkhau") {
            return this._pasword
        } else {
            return "Sai mật khẩu"
        }
    }
    public set password(v: string) {
        this._pasword = v

    }
}
let test1 = new Nhanvat("nhanvat1", "Matkhau")
console.log("Mật khẩu get được là:", test1.password);