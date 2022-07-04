/*
Reta Mutte Matias | DIV D
E/S Ejer 5

Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombre = txtIdNombre.value; // 1ra forma de acceder al ID
	let edad = document.getElementById("txtIdEdad").value; // 2da forma de acceder al ID
	alert("Usted se llama " + nombre + " y tiene " + edad + " años");
}

