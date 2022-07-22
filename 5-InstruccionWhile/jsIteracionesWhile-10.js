/*
	Reta Mutte Matias | DIV D
	WHILE Ejer 10

	ENTREGADO

	Al presionar el botón pedir  números  
	hasta que el usuario quiera, mostrar:
	1-Suma de los negativos.
	2-Suma de los positivos.
	3-Cantidad de positivos.
	4-Cantidad de negativos.
	5-Cantidad de ceros.
	6-Cantidad de números pares.
	7-Promedio de positivos.
	8-Promedios de negativos.
	9-Diferencia entre positivos y negativos, (positivos-negativos). 
*/
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let sumaNegativos=0; // ?Listo
	let sumaPositivos=0; // ?Listo
	let cantPositivos=0; // ?Listo
	let cantNegativos=0; // ?Listo
	let cantCeros=0; // ?Listo
	let cantNumPares=0; // ?Listo
	let promedioPositivos; //?Listo
	let promedioNegativos; //?Listo
	let difCantPositivoNegativo; //?Listo

	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado > 0) {
			cantPositivos++;
			sumaPositivos = sumaPositivos + numeroIngresado;
		} else if(numeroIngresado < 0) {
			cantNegativos++;
			sumaNegativos = sumaNegativos + numeroIngresado;
		} else {
			cantCeros++;
		}

		if(numeroIngresado % 2 == 0) {
			cantNumPares++;
		}

		respuesta=prompt("desea continuar?");
	}//fin del while

	promedioPositivos = sumaPositivos / cantPositivos;
	promedioNegativos = sumaNegativos / cantNegativos;

	if(cantPositivos > cantNegativos) {
		difCantPositivoNegativo = cantPositivos - cantNegativos;
	} else {
		difCantPositivoNegativo = cantNegativos -  cantPositivos;
	}
	

	document.write("La suma de positivos es :"+sumaPositivos+"<br>"
					+"La suma de negativos es :"+sumaNegativos+"<br>"
					+"La cantidad de positivos es: "+cantPositivos+"<br>"
					+"La cantidad de negativos es: "+cantNegativos+"<br>"
					+"La cantidad de ceros es: "+cantCeros+"<br>"
					+"La cantidad de numeros pares es: "+cantNumPares+"<br><br>"
					+"El promedio de los positivos es: "+promedioPositivos.toFixed(2)+"<br>"
					+"EL promedio de los negativos es: "+promedioNegativos.toFixed(2)+"<br>"
					+"La diferencia en cantidad de los positivos y los negativos es: "+difCantPositivoNegativo);
}//FIN DE LA FUNCIÓN