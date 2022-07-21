/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	var esLaPrimera = true;
	//iniciar variables

	respuesta='si';
	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		if(!esLaPrimera) {
			if(numeroIngresado > numeroMaximo) {
				numeroMaximo = numeroIngresado;
			} else {
				numeroMinimo = numeroIngresado;
			}
		} else {
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			esLaPrimera = false;
		}
		

		respuesta=prompt("desea continuar?");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN