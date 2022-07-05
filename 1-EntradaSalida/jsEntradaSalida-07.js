/*
Reta Mutte Matias | DIV D
E/S Ejer 7

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	let num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	let suma = num1 + num2;

	alert("La suma da: " + suma);	
}

function restar()
{
	let num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	let num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	
	let resta = num1 - num2;
	
	alert("La resta da: " + resta);
}

function multiplicar()
{ 
	let num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	let num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	let mult = num1 * num2;
	
	alert("La multiplicación da: " + mult);
}

function dividir()
{
	let num1 = parseFloat(document.getElementById("txtIdNumeroUno").value);
	let num2 = parseFloat(document.getElementById("txtIdNumeroDos").value);

	if(num2 != 0) {
		let div = num1 / num2;

		alert("La división da: " + div);
	} else {
		alert("No se puede dividir por cero.");
	}

	
}

