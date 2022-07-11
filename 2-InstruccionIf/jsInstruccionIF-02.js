/*
	Reta Mutte Matias | DIV D
	IF Ejer 2

	ENTREGADO

	Al ingresar una edad debemos informar solo si la persona es mayor de edad
*/

function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad >= 18) {
		alert("Es mayor de edad");
	}
}