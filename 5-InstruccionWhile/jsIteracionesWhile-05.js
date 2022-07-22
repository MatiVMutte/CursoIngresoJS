/*
Reta Mutte Matias
	DIV D

	ENTREGADO
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");

	while (sexoIngresado != 'f' && sexoIngresado != 'm') {
		sexoIngresado = prompt("ingrese f ó m .");
	}

	if(sexoIngresado == 'f') {
		sexoIngresado = "Femenino";
	} else { 
		sexoIngresado = "Masculino";
	}

	/*switch (sexoIngresado) {
		case 'f':
			sexoIngresado = "Femenino";
			break;
		default:
			sexoIngresado = "Masculino";
			break;
	}*/

	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN