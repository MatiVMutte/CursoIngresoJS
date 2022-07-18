/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var contadorIntentos = 0;
var numeroIngresado;
var comenzo = false;

function comenzar()
{
  if(!comenzo) {
    numeroSecreto = Math.floor(Math.random() * 100 + 1);

    alert("EL JUEGO HA COMENZADO! Ingrese un numero en el campo de abajo.");
    comenzo = true;
    document.getElementById("txtIdIntentos").value = "Intentos: " + contadorIntentos;
  } else {
    alert("El juego ya ha comenzado. Debe ingresar un numero.");
  }
}

function verificar()
{
  if(comenzo) {
    numeroIngresado = document.getElementById("txtIdNumero").value;

    if(numeroIngresado != "" && !isNaN(numeroIngresado) && (numeroIngresado > 0 && numeroIngresado < 101)) {
      numeroIngresado = parseInt(numeroIngresado);

      if(numeroIngresado == numeroSecreto) {
        alert("Usted es un ganador!!!\nY en solo " + contadorIntentos + " intentos.");
        comenzo = false;
      } else {
        contadorIntentos++;
        document.getElementById("txtIdIntentos").value = "Intentos: " + contadorIntentos;
        if(numeroIngresado > numeroSecreto) {
          alert("Te pasaste!!");
        } else {
          alert("Falta para llegarrr!!");
        }
      }
    } else {
        alert("Debe ingresar un numero entre ( 1 - 100).");
    }

  } else {
      alert("Dale al boton \"Comenzar\"");
  }
}