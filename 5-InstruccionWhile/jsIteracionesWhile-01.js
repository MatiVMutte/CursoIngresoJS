/*
	Reta Mutte Matias | DIV D
	While - Ejer 01

	al presionar el botón mostrar 10 repeticiones 
	con números ASCENDENTE, desde el 1 al 10.
*/
function mostrar()
{
	let numero;
	let mensaje;
	numero = 1;
	mensaje = "";
	
	/*for(numero = 1; numero < 10; numero++) { // DESDE - HASTA
		mensaje += numero + ", ";
	}
	mensaje += numero;*/

	while(numero < 10) { // MIENTRAS(condicion)
		mensaje += numero + ", ";
		numero++;
	}
	mensaje += numero;

	document.write(mensaje);
}//FIN DE LA FUNCIÓN