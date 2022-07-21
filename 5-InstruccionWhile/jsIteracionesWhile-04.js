/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");
	if(numeroIngresado != undefined) {
		if(!isNaN(numeroIngresado)) {
			numeroIngresado = parseInt(numeroIngresado);

			while ((numeroIngresado < -1 || numeroIngresado > 11)) {
				numeroIngresado = prompt("ingrese un número entre 0 y 10.");
				if(numeroIngresado != undefined) {
					if(!isNaN(numeroIngresado)) {
						numeroIngresado = parseInt(numeroIngresado);
					} else {
						alert("No es un numero");
					}
				}
			}

			document.getElementById("txtIdNumero").value = numeroIngresado;
		} else {
			alert("No es un numero");
		}
	}
	
}//FIN DE LA FUNCIÓN