/*
	Reta Mutte Matias | DIV D
	IF Ejer 2

	Al ingresar una edad debemos informar solo si la persona es mayor de edad
*/

function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad >= 18) {
		alert("Es mayor de edad");
	}
}