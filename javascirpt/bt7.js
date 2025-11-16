let nhietDo = prompt("nhập nhiệt độ môi trường: "),
  tinhTrang = prompt("nhập tình trạng: ");
let hoatDong = (tinhTrang === "true")
  ? "Ở nhà"
  : nhietDo > 25 && tinhTrang === "false"
  ? "Đi chơi"
  : "Ở nhà";
console.log(hoatDong);
