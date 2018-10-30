// ABSTRACT SỬ DỤNG VỚI CLASS
// Giống bản vẽ nháp, là 1 cái khung, chỉ có thể sử dụng class kế thừa từ nó
abstract class dienthoai {
    ten: string
    public guitinnhan() {
        console.log("Gửi tin nhắn")
    }
    public goidienthoai() {
        console.log("Gọi điện thoại")
    }
    // ABSTRACT SỬ DỤNG VỚI FUNCTION ( KHAI BÁO KIỂU DỮ LIỆU NÀO PHẢI TRẢ VỀ NHƯ THẾ)
    abstract testguitinnhan(): string
}

class android extends dienthoai {
    // phải 
    testguitinnhan(): string {
        return "Gửi tin nhắn trong android"
    }
}

let samsung = new android()
samsung.guitinnhan()
samsung.goidienthoai()
samsung.testguitinnhan()
