/*
Reta Mutte Matias | DIV D
E/S Ejer 9

ENTREGADO

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".

EXTRA: 
		E/S 9 bis: Se pedirá el importe del aumento por prompt.
*/
function mostrarAumento()
{
	/*let importe;
	let aumento;
	let total;

	importe = document.getElementById("txtIdSueldo").value;
	importe = parseInt(importe);

	aumento = (importe * 10) / 100 ;
	total = importe + aumento;

	txtIdResultado.value = total;*/

	let importe;
	let aumento;
	let total;
	let porcentaje;

	importe = document.getElementById("txtIdSueldo").value;
	porcentaje = prompt("Ingrese el porcentaje de aumento");

	importe = parseFloat(importe);
	porcentaje = parseInt(porcentaje);
	
	aumento = (importe * porcentaje) / 100 ;
	total = importe + aumento;

	txtIdResultado.value = total;
}
