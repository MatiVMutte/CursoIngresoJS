/*
	Reta Mutte Matias
	DIV D

	ENTREGADO

al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{
	var contador;
	let mensaje;
	contador=10; 
	mensaje = "";

	/*for(numero = 1; numero < 10; numero++) { // DESDE - HASTA
		mensaje += numero + ", ";
	}
	mensaje += numero;*/

	while(contador > 0) { // MIENTRAS(condicion)
		mensaje += contador + ", ";
		contador--;
	}
	mensaje += contador;

	document.write(mensaje);

}//FIN DE LA FUNCIÓN