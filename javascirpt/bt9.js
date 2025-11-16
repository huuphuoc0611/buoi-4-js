let tuoi = prompt("nhập tuổi: "),
    vaiTro = prompt("nhập vai trò: ");
let quyen = (vaiTro  === "admin" || vaiTro === "user" && tuoi >=18) ? "Được quyền truy cập" : "Không có quyền truy cập";
console.log(quyen);