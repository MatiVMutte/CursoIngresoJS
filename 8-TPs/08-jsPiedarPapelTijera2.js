/*
    3. Piedra, Papel o Tijera (v 1.0):

    Al comenzar el juego generaremos un número RANDOM del 1 al 3 para la selección de la máquina, 
    siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.

    El jugador seleccionará una imagen correspondiente a su opción y le informaremos si ganó, empató o perdió

    3. Piedra, Papel o Tijera (v 2.0):
    
    Ahora debemos informar cuantas veces se ganó, perdió o empató desde la última recarga de página
*/
var seleccionMaquina;
var mensaje;

function comenzar() 
{
    seleccionMaquina = Math.floor(Math.random() * 3 + 1);
}

function piedra() 
{
    comenzar(); // Llamo a la funcion para que se pueda ejecutar
    switch (seleccionMaquina) {
        case 1:
            mensaje = "Empato";
            break;
        case 2:
            mensaje = "Perdiste...";
            break;
        default:
            mensaje = "Ganaste!!!";
            break;
    }

    alert(mensaje);
}

function papel() 
{
    comenzar(); // Llamo a la funcion para que se pueda ejecutar
    switch (seleccionMaquina) {
        case 1:
            mensaje = "Ganaste!!";
            break;
        case 2:
            mensaje = "Empate";
            break;
        default:
            mensaje = "Perdiste...";
            break;
    }

    alert(mensaje);
}

function tijera() 
{
    comenzar(); // Llamo a la funcion para que se pueda ejecutar
    switch (seleccionMaquina) {
        case 1:
            mensaje = "Perdio";
            break;
        case 2:
            mensaje = "Ganaste!!";
            break;
        default:
            mensaje = "Empate";
            break;
    }

    alert(mensaje);
}