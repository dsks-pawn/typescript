// Public : Đây là mức truy cập thoáng nhất bởi vì bạn có thể truy cập tới các phương thức và 
// thuộc tính ở bất cứ đâu, dù trong nộ bộ của lớp hay ở lớp con hay cả bên ngoài lớp đều được.
// Sử dụng từ khóa public.


// Private: Đây là thành phần chỉ dành riêng cho nội bộ của lớp, nghĩa là ta không thể truy xuất tới thành phần private ở lớp con hoặc ở bên ngoài lớp.
// Ta sử dụng từ khóa private

// Protected : Mức truy cập này chỉ cho phép truy xuất nội bộ trong lớp đó và lớp kế thừa, riêng ở bên ngoài lớp sẽ không truy xuất đc
// Mức protected thường được dùng cho những phương thức và thuộc tính có khả năng bị lớp con định nghĩa lại 
// (overwrite),khi bạn biết chắc là có lớp khác sẽ kế thừa lớp này và những phương thức, thuộc tính đó chỉ được dùng trong lớp kế thừa nó.
class Sinhvien {
    public lophoc: string;
    private Masv: string;
    protected hocbai(): void {
    }
}



