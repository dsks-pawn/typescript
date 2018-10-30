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