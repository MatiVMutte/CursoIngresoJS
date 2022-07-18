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
  let mensaje;
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
          contadorIntentos++;
          switch (contadorIntentos) {
            case 1:
              mensaje = "Usted es un Psíquico";
              break;
            case 2:
              mensaje = "Excelente percepción";
              break;
            case 3:
              mensaje = "Esto es suerte";
              break;
            case 4:
              mensaje = "Excelente técnica";
              break;
            case 5:
              mensaje = "Usted está en la media";
              break;
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
              mensaje = "Falta técnica!!";
              break;
            default: 
              mensaje = "Afortunado en el amor!!";
              break;
          }
          document.getElementById("txtIdIntentos").value = contadorIntentos + "° Intento: " + mensaje;
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