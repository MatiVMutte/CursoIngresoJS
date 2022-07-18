/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var contadorIntentos;
var numeroIngresado;
var comenzo;
comenzo = false;

function comenzar()
{
  if(!comenzo) {
    comenzo = true;
    document.getElementById("txtIdNumero").value = "";
    contadorIntentos = 0;

    numeroSecreto = Math.floor(Math.random() * 100 + 1);

    alert("EL JUEGO HA COMENZADO! Ingrese un numero en el campo de abajo.");
    document.getElementById("txtIdIntentos").value = "Intentos: " + contadorIntentos;
  } else {
    alert("El juego ya ha comenzado. Debe ingresar un numero.");
  }
}

function verificar()
{
  if(comenzo) {
    numeroIngresado = document.getElementById("txtIdNumero").value;

    if(numeroIngresado != "" && !isNaN(numeroIngresado)) {
      numeroIngresado = parseInt(numeroIngresado);
      if(numeroIngresado > 0 && numeroIngresado < 101) {

        if(numeroIngresado == numeroSecreto) {
          alert("Usted es un ganador!!!\nY en solo " + contadorIntentos + " intentos.");
          comenzo = false;
        } else {
          if(numeroIngresado > numeroSecreto) {
            alert("Te pasaste!!");
          } else {
            alert("Falta para llegarrr!!");
          }
          document.getElementById("txtIdIntentos").value = "Intentos: " + (++contadorIntentos);
        }

      }else {
        alert("Debe ingresar un numero entre (1 - 100).");
      }

    } else {
        alert("Ingrese un numero.");
    }

  } else {
      alert("Dale al boton \"Comenzar\". Para Generar un numero aleatorio.");
  }
}