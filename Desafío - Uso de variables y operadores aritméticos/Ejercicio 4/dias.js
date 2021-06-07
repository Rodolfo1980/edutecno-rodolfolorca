var dias_totales = prompt("Ingrese la cantidad de días que desea calcular");
var dias_totales = parseInt(dias_totales);
var años = Math.floor(dias_totales/365);
var meses = Math.floor((dias_totales%365)/30);
var semanas = Math.floor((dias_totales%30)/7);
var dias = Math.floor(((dias_totales%365)%7));
alert(`Son ${años} años, ${meses} meses, ${semanas} semanas, ${dias} dias`);