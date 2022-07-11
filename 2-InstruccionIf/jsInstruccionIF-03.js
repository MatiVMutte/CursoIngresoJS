/*
	Reta Mutte Matias | DIV D
	IF Ejer 3

	ENTREGADO

	Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.
*/

function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad >= 18) {
		alert("Es mayor de edad");
	} else {
		alert("Es menor de edad");
	}
}