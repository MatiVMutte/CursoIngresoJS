/*
	Reta Mutte Matias | DIV D
	FOR Ejer 06

	al presionar el botón pedir un número. 
	mostrar los numeros pares desde el 1 al número ingresado, 
	y mostrar la cantidad de numeros pares encontrados.
*/

function mostrar()
{
	 let numeroDesde;
	 let numeroHasta;
	 let cantPares;
	 let mensaje;
	 numeroDesde = 0;
	 cantPares = 0;
	 mensaje = "";

	numeroHasta = prompt("¿Hasta que numero quiere saber los pares?");

	// for(numeroDesde = 0; numeroDesde < numeroHasta; numeroDesde++) {
	// 	if(numeroDesde % 2 == 0) {	
	// 		cantPares++;
	// 		mensaje += numeroDesde + "<br>";
	// 	}
	// }

	for(;;) {
		if(numeroDesde % 2 == 0) {	
			cantPares++;
			mensaje += numeroDesde + "<br>";
		}
		if(numeroDesde == numeroHasta) {
			break;
		}
		numeroDesde++;
	}

	document.write("Cantidad de numeros pares hay: " + cantPares + "<br>"
	 				+ "NUMEROS PARES: <br>" + mensaje);
}//FIN DE LA FUNCIÓN