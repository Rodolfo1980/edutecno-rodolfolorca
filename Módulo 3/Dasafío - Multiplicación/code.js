var numero = prompt("Ingrese el número que desea multiplicar y factorizar");
var numero = parseInt(numero);
var total = numero;
    for(i=0; i<=12; i++){
        alert(numero+" x "+i+ ": "+numero*i);
    }
    for (var i=1; i < numero; i++){
        total=total*i;
    }
    alert("El factorial del número "+numero+" es "+total);