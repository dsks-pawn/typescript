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