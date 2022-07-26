/*
	Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
	de cada una debo obtener los siguientes datos:
	el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
	el precio (validar entre 100 y 300),
	la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
	la Marca y el fabricante.

	Se debe Informar al usuario lo siguiente:
	a) Del más caro de los jabones, la cantidad de unidades y el fabricante
	b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
	c) Cuántas unidades de Barbijos se compraron en total
*/

/*
	ENTRADA: precioUnitario, marca, fabricante, producto, unidades
	PROCESO: 
		validar precio (tiene que estar entre 100 y 300)
		cantidad de unidades --> No puede ser 0, negativo y no debe superar los 1000.
		calcular promedio
		cuantos barbijos se compraron en total.
	SALIDA: 
		a) Del más caro de los jabones, la cantidad de unidades y el fabricante
		b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
		c) Cuántas unidades de Barbijos se compraron en total
*/
function mostrar()
{
	let precioUnitario;
	let tipoProducto;
	let cantUnidades;
	let marca;
	let fabricante;

	let masCaroJabon;
	let cantUnidadesJabonCaro;
	let fabricanteJabon;
	cantUnidadesJabonTotal = 0;
	cantUnidadesBarbijoTotal = 0;
	cantUnidadesAlcoholTotal = 0;

	let cantUnidadesJabonTotal;
	let cantUnidadesBarbijoTotal;
	let cantUnidadesAlcoholTotal;
	let productoMasUnidades;
	let precioTotalJabon;
	let precioTotalBarbijo;
	let precioTotalAlcohol;
	let promedioMasUnidades;
	let nombreProductoMasUnidades;
	let precioTotalMasUnidades;
	let esLaPrimeraJabon = true;
	precioTotalJabon = 0;
	precioTotalBarbijo = 0;
	precioTotalAlcohol = 0;
	
	for(let i = 0; i < 5; i++) {
		tipoProducto = prompt("Ingrese el producto: \nBarbijo\nJabon\nAlcohol");
		tipoProducto = tipoProducto.toLowerCase();
		while(tipoProducto != "barbijo" && tipoProducto != "jabon" && tipoProducto != "alcohol") {
			tipoProducto = prompt("Reingrese el producto: \nBarbijo\nJabon\nAlcohol");
			tipoProducto = tipoProducto.toLowerCase();
		}

		precioUnitario = prompt("Ingrese el precio unitario del " + tipoProducto + ":");
		precioUnitario = parseFloat(precioUnitario);
		while((precioUnitario < 100 || precioUnitario > 300) || isNaN(precioUnitario)) {
			precioUnitario = prompt("Reingrese el precio unitario del " + tipoProducto + ":");
			precioUnitario = parseFloat(precioUnitario);
		}

		cantUnidades = prompt("Ingrese cuantos " + tipoProducto + " va a comprar: (No puede ser 0 ni superar los 1000)");
		cantUnidades = parseInt(cantUnidades);
		while(cantUnidades == 0 || cantUnidades > 1000) {
			cantUnidades = prompt("Reingrese cuantos " + tipoProducto + " va a comprar: (No puede ser 0 ni superar los 1000)");
			cantUnidades = parseInt(cantUnidades);
		}

		marca = prompt("Ingrese la marca del producto:");

		fabricante = prompt("Ingrese el fabricante:");

		switch (tipoProducto) {
			case "jabon":
				if(precioUnitario > masCaroJabon || esLaPrimeraJabon) {
					masCaroJabon = precioUnitario;
					cantUnidadesJabonCaro = cantUnidades;
					fabricanteJabon = fabricante;
					esLaPrimeraJabon = false;
				}
				cantUnidadesJabonTotal = cantUnidadesJabonTotal + cantUnidades;
				precioTotalJabon = precioTotalJabon + precioUnitario;
				break;
			case "barbijo":
				cantUnidadesBarbijoTotal = cantUnidadesBarbijoTotal + cantUnidades;
				precioTotalBarbijo = precioTotalBarbijo + precioUnitario;
				break;
			default:
				cantUnidadesAlcoholTotal = cantUnidadesAlcoholTotal + cantUnidades;
				precioTotalAlcohol = precioTotalAlcohol + precioUnitario;
				break;
		}
	}

	if(cantUnidadesBarbijoTotal > cantUnidadesJabonTotal && cantUnidadesBarbijoTotal > cantUnidadesAlcoholTotal) {
		nombreProductoMasUnidades = "barbijo";
		precioTotalMasUnidades = precioTotalBarbijo;
		productoMasUnidades = cantUnidadesBarbijoTotal;
	} else if(cantUnidadesJabonTotal > cantUnidadesBarbijoTotal && cantUnidadesJabonTotal > cantUnidadesAlcoholTotal) {
		nombreProductoMasUnidades = "jabon";
		precioTotalMasUnidades = precioTotalJabon;
		productoMasUnidades = cantUnidadesJabonTotal;
	} else {
		nombreProductoMasUnidades = "alcohol";
		precioTotalMasUnidades = precioTotalAlcohol;
		productoMasUnidades = cantUnidadesAlcoholTotal;
	}

	promedioMasUnidades = ((precioTotalAlcohol * cantUnidadesAlcoholTotal) + (precioTotalBarbijo * cantUnidadesBarbijoTotal) + (precioTotalJabon * cantUnidadesJabonTotal)) / (productoMasUnidades * precioTotalMasUnidades);


	document.write("El jabon mas caro es el del " + fabricanteJabon + " con precio $" + masCaroJabon + " cada uno." 
					+ "<br>Compraras " + cantUnidadesJabonCaro + " Jabones." + "<br><br>"); // !A

	document.write("El producto con mas unidades tiene: " + productoMasUnidades + "y es " + nombreProductoMasUnidades + "<br>");
	document.write("El promedio de compra del producto con mas unidades: " + promedioMasUnidades);

	document.write("Barbijos que se compraron en total son: " + cantUnidadesBarbijoTotal); // !C
}
