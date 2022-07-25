/* 
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
9-Diferencia entre positivos y negativos, (positvos-negativos). 
10-El numero mas grande.
11-De los pares el mas chiquito.
12-De los negativos el mas grande, indicando el orden de ingreso.
*/
function mostrar()
{
	let numeroIngresado;
	let respuesta;
	let sumaNegativos;
	let sumaPositivo;
	let cantidadCeros;
	let cantidadPositivos;
	let cantidadNegativos;
	let cantidadDePares;
	let promedioPositivos;
	let promedioNegativos;
	let diferenciaNumeros;
	let banderaMaxima;
	let numeroNegativoMaximo;
	let numeroMaximo;
	let numeroParMinimo;
    let orden;
    let contador;

	respuesta = "si";
	sumaNegativos = 0;
	sumaPositivo = 0;
	cantidadCeros = 0;
	cantidadNegativos = 0;
	cantidadPositivos = 0;
	cantidadDePares = 0;
	banderaMaxima = false;
	contador = 0;

	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		contador++;

		if(numeroIngresado < 0)
		{
			sumaNegativos = sumaNegativos + numeroIngresado;
			cantidadNegativos++;

			if(numeroIngresado > numeroNegativoMaximo || cantidadNegativos == 1)
			{
				numeroNegativoMaximo = numeroIngresado;
				orden = contador;
			}
		}
		else
		{
			if(numeroIngresado > 0)
			{
				sumaPositivo = sumaPositivo + numeroIngresado;
				cantidadPositivos++;
			}
			else
			{
				cantidadCeros++;
			}
		}
		
		if(numeroIngresado % 2 == 0)
		{
			cantidadDePares++;

			if(numeroIngresado < numeroParMinimo || cantidadDePares == 1)
			{
				numeroParMinimo = numeroIngresado;
			}	
		}	
		
		if(numeroIngresado > numeroMaximo || banderaMaxima == false)
		{
			numeroMaximo = numeroIngresado;
			banderaMaxima =  true;
		}

		respuesta = prompt("Desea seguir ingresando numeros?");

	}

	diferenciaNumeros = sumaPositivo - sumaNegativos;

	document.write("La suma de los numeros positivos es: " + sumaPositivo + "<br>");
	document.write("La suma de los numeros negativos es: " + sumaNegativos + "<br>");
	document.write("La cantidad de positivos es: " + cantidadPositivos + "<br>");
	document.write("La cantidad de negativos es: " + cantidadNegativos + "<br>");
	document.write("La cantidad de ceros es de: " + cantidadCeros + "<br>");
	document.write("La cantidad de numeros pares es: " + cantidadDePares + "<br>");
	
	if(cantidadNegativos == 0)
	{
		document.write("No se pudo calcular el promedio porque no se ingreso negativos" + "<br>");
	}
	else
	{
		promedioNegativos = sumaNegativos / cantidadNegativos;
		document.write("El promedio de negativos es: " + promedioNegativos + "<br>");
		document.write("El numero negativo maximo es: " + numeroNegativoMaximo + " y su orden es: " + orden + "<br>")
	}
	if(cantidadPositivos == 0)
	{
		document.write("No se pudo calcular el promedio porque no se ingreso positivos" + "<br>");
	}
	else
	{
		promedioPositivos = sumaPositivo / cantidadPositivos;
		document.write("El promedio de positivos es: " + promedioPositivos + "<br>");
	}
	document.write("La diferencia entre los positivos y negativos es de: " + diferenciaNumeros + "<br>");
	document.write("El numero maximo es: " + numeroMaximo + "<br>");
	if(cantidadDePares == 0)
	{
		document.write("No se ingreso numeros pares");
	}
	else
	{
		document.write("El numero par mas chiquito es: " + numeroParMinimo + "<br>");
	}
	
}//FIN DE LA FUNCIÓN

