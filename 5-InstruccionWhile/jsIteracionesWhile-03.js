/*
Reta Mutte Matias
	DIV D

	ENTREGADO
al presionar el botón pedir la CLAVE (ayuda: es utn750)
*/
function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");

	while(claveIngresada != "utn750") {
		claveIngresada = prompt("ERROR. ingrese el número clave.");
	}

	alert("Clave correcta");
	
}//FIN DE LA FUNCIÓN
