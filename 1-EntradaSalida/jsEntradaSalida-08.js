/*
Reta Mutte Matias | DIV D
E/S Ejer 8

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let n1 = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	let n2 = parseInt(document.getElementById("txtIdNumeroDivisor").value);

	let resto = n1 % n2;

	alert("El resto es: " + resto);
}
