function aleatorio (minimo, maximo)
{
    var numero = Math.floor(Math.random() * (maximo - minimo +1) + minimo)
    return numero;
}
var piedra = 0;
var papel = 1;
var tijera = 2;
var opciones = ["Piedra","Papel","Tijera"];
var opcionUsuario;
var opcionMaquina = aleatorio(0,2);
opcionUsuario = prompt ("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2");
alert ("Elegiste " + opciones[opcionUsuario]);
alert ("JavaScript eligió " + opciones[opcionMaquina]);
if (opcionUsuario == 0)
{
    if (opcionMaquina == piedra)
    {
        alert("Empate!")
    }
    else if (opcionMaquina == papel)
    {
        alert("¡Perdiste Ja Ja!")
    }
    else if (opcionMaquina == tijera)
    {
        alert("¡Felicitaciones Ganaste!")
    }
}
else if (opcionUsuario == 1)
{
    if (opcionMaquina == papel)
    {
        alert("Empate!")
    }
    else if (opcionMaquina == tijera)
    {
        alert("Perdiste Ja Ja!")
    }
    else if (opcionMaquina == piedra)
    {
        alert("Felicitaciones Ganaste!")
    }
} 
else if (opcionUsuario == 2)
{
    if (opcionMaquina == tijera)
    {
        alert("Empate!")
    }
    else if (opcionMaquina == piedra)
    {
        alert("Perdiste Ja Ja!")
    }
    else if (opcionMaquina == papel)
    {
        alert("Felicitaciones Ganaste!")
    }
}
else {
    alert("Favor ingresar un número válido 0, 1 ó 2");
    opcionUsuario = prompt ("Qué eliges???\nPiedra: 0\nPapel: 1\nTijera: 2");
    alert ("Elegiste " + opciones[opcionUsuario]);
    alert ("JavaScript eligió " + opciones[opcionMaquina]);
    if (opcionUsuario == 0)
    {
        if (opcionMaquina == piedra)
        {
            alert("Empate!")
        }
        else if (opcionMaquina == papel)
        {
            alert("¡Perdiste Ja Ja!")
        }
        else if (opcionMaquina == tijera)
        {
            alert("¡Felicitaciones Ganaste!")
        }
    }
    else if (opcionUsuario == 1)
    {
        if (opcionMaquina == papel)
        {
            alert("Empate!")
        }
        else if (opcionMaquina == tijera)
        {
            alert("Perdiste Ja Ja!")
        }
        else if (opcionMaquina == piedra)
        {
            alert("Felicitaciones Ganaste!")
        }
    } 
    else if (opcionUsuario == 2)
    {
        if (opcionMaquina == tijera)
        {
            alert("Empate!")    
        }
        else if (opcionMaquina == piedra)
        {
            alert("Perdiste Ja Ja!")
        }
        else if (opcionMaquina == papel)
        {
            alert("Felicitaciones Ganaste!")
        }
    }
}