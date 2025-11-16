let diem = prompt("nhập số điểm: ");
switch(true) {
    case diem >= 90 && diem  <=100:
        console.log("Giỏi");
        break;
    case diem >= 70 && diem <= 89:
        console.log("Khá");
        break;
    case diem >= 50 && diem <= 69:
        console.log("Trung Bình");
        break;
    case diem <= 50 && diem >=0:
        console.log("Yếu");
        break;
     default:
        console.log("Điểm không hợp lệ");
}