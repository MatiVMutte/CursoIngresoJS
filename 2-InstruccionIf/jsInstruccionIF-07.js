/*
	Reta Mutte Matias | DIV D
	IF Ejer 7

	ENTREGADO --> Yo accedi al select de una forma distinta, por que pense que iba a ser distonta la forma. Asi que investigue esta.
		|---> Ademas añadi validaciones para dos casos: 
											|---> Evitar que se envien campos vacios.
											|---> Evitar que se envien campos con otro tipo de dato que no sea el pedido.

	Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", 
	mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
*/

function estaVacio(campo) {
	return campo == "";
}

function mostrar()
{
	let edad;
	let select;
	let estadoCivil;

	edad = document.getElementById("txtIdEdad").value; // Obtengo la edad del campo INPUT tipo Texto
	select = document.getElementById("estadoCivil"); // Obtengo el elemento del campo SELECT para posteriormente acceder a el elemento seleccionado

	if(!estaVacio(edad)){ // Verifico Si El Campo Esta Vacio
		if(!isNaN(edad)) { // Si el campo NO esta vacio. Verifico si (edad) sea un numero. 
			edad = parseInt(edad); // Entonces convierto el "String" edad a un "Int"
			estadoCivil = select.options[select.selectedIndex].text; // Obtengo en "String" el texto que esta en option seleccionado [Dentro de los corchetes va la posicion]
			estadoCivil = estadoCivil.toLowerCase(); // Convierto todo ese texto obtenido en MINUSCULAS(lowerCase) para evitar problemas en el IF

			if(edad < 18 && estadoCivil != "soltero") { // Si la persona es menor de edad AND/Y su estado civil es distinto a "Soltero"...
				alert("Es muy pequenio para NO ser soltero.");
			}

		} else {
			alert("Debe poner su edad.");
		}
	} else {
		alert("Campo EDAD vacio");
	}
	

    //alert(seleccion.selectedIndex); --> Me devuelve el indice del select seleccionado
    //alert(seleccion.options[seleccion.selectedIndex].value); --> Para obtener el value=""
	//alert(seleccion.options[seleccion.selectedIndex].text); --> Para obtener el "texto"
}