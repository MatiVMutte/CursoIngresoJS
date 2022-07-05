/*
Reta Mutte Matias | DIV D
E/S Ejer 10

ENTREGADO

Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe
	let descuento;
	let total;
	let mensaje;

	importe = document.getElementById("txtIdImporte").value;
	importe = parseFloat(importe);

	descuento = (importe * 25) / 100;
	total = importe - descuento;

	mensaje = "El importe es: " + total;
	document.getElementById("txtIdResultado").value = mensaje;

	/*
	let importe
	let descuento;
	let total;
	let porcentaje;
	let mensaje;

	importe = document.getElementById("txtIdImporte").value;
	porcentaje = prompt("Ingrese el porcentaje de aumento");

	importe = parseFloat(importe);
	porcentaje = parseInt(porcentaje);

	descuento = (importe * porcentaje) / 100;
	total = importe - descuento;

	mensaje = "El importe con descuento es: $" + total;
	document.getElementById("txtIdResultado").value = mensaje;

	alert("Usted obtuvo un descuento de $" + descuento);
	*/
}
