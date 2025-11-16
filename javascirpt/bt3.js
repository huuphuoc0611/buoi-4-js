let year = prompt("nhập số năm: ");
if (year % 4 === 0 && year % 100 !== 0 && year % 400 === 0)   {
    console.log("năm nhuận")
}else{
    console.log("năm không nhuận")
}