/*
Reta Mutte Matias | DIV D
E/S Ejer 10

Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe
	let descuento;
	let total;

	importe = parseInt(document.getElementById("txtIdImporte").value);

	descuento = (importe * 25) / 100;
	total = importe - descuento;

	document.getElementById("txtIdResultado").value = total;
}
