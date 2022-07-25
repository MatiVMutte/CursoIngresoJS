/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var eleccionUsuarioMensaje;
var eleccionMaquinaMensaje;

function comenzar()
{
	eleccionMaquina = Math.floor(Math.random() * 3 + 1);
}//FIN DE LA FUNCIÓN
function piedra()
{
    let mensaje;
    comenzar();
    eleccionUsuarioMensaje = "Piedra";
    switch (eleccionMaquina) {
        case 1:
            eleccionMaquinaMensaje = "Piedra";
            break;
        case 2:
            eleccionMaquinaMensaje = "Papel";
            break;
        default:
            eleccionMaquinaMensaje = "Tijera";
            break;
    }

    mensaje = eleccionUsuarioMensaje + " VS " + eleccionMaquinaMensaje;

    if(eleccionMaquina == 1) {
        mensaje += " = Empate";
    } else if(eleccionMaquina == 2) {
        mensaje += " = Perdiste...";
    } else {
        mensaje += " = Ganaste!!!";
    }

    alert(mensaje);
}//FIN DE LA FUNCIÓN
function papel()
{
    let mensaje;
    comenzar();
    eleccionUsuarioMensaje = "Papel";
    switch (eleccionMaquina) {
        case 1:
            eleccionMaquinaMensaje = "Piedra";
            break;
        case 2:
            eleccionMaquinaMensaje = "Papel";
            break;
        default:
            eleccionMaquinaMensaje = "Tijera";
            break;
    }

    mensaje = eleccionUsuarioMensaje + " VS " + eleccionMaquinaMensaje;

    if(eleccionMaquina == 1) {
        mensaje += " = Ganaste!!!";
    } else if(eleccionMaquina == 2) {
        mensaje += " = Empate";
    } else {
        mensaje += " = Perdiste...";
    }

    alert(mensaje);
}//FIN DE LA FUNCIÓN
function tijera()
{  
	let mensaje;
    comenzar();
    eleccionUsuarioMensaje = "Tijera";
    switch (eleccionMaquina) {
        case 1:
            eleccionMaquinaMensaje = "Piedra";
            break;
        case 2:
            eleccionMaquinaMensaje = "Papel";
            break;
        default:
            eleccionMaquinaMensaje = "Tijera";
            break;
    }

    mensaje = eleccionUsuarioMensaje + " VS " + eleccionMaquinaMensaje;

    if(eleccionMaquina == 1) {
        mensaje += " = Perdiste...";
    } else if(eleccionMaquina == 2) {
        mensaje += " = Ganaste!!!";
    } else {
        mensaje += " = Empate";
    }

    alert(mensaje);
}//FIN DE LA FUNCIÓN