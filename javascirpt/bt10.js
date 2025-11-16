let donVi = prompt("nhập đơn vị (C/F); ");
switch(donVi){
    case "C":
    let nhietDoC = prompt("nhập nhiệt độ: ");
    if(nhietDoC > -273){
         console.log((nhietDoC * 9) / 5 + 32, "fahrenheit");
    }else {
        console.log("nhiệt độ C phải trên -273");
    }
    break;
    case "F":
    let nhietDoF = prompt("nhập nhiệt độ: ");
    if(nhietDoF> 0){
        console.log(((nhietDoF - 32) * 5) / 9, "celsius");
    }else{
        console.log("nhiệt độ F phải trên 0 Kelvin");
    }
    break
    default:
        console.log("Không đúng đơn vị");
}