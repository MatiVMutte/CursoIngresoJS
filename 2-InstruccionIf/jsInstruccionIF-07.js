/*
	Reta Mutte Matias | DIV D
	IF Ejer 7

	Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", 
	mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
*/

function mostrar()
{
	let edad;
	let select;
	let textSelect;

	edad = document.getElementById("txtIdEdad").value;
	select = document.getElementById("estadoCivil");

	if(edad != isNaN(edad)) {
		edad = parseInt(edad);
		textSelect = select.options[select.selectedIndex].text.toLowerCase();

		if(edad < 18 && textSelect != "soltero") {
			alert("Es muy pequenio para NO ser soltero.");
		} else {
			alert("Muy bien!!");
		}
	} else {
		alert("Debe poner su edad.");
	}

	

    //alert(seleccion.selectedIndex); --> Me devuelve el indice del select seleccionado
    //alert(seleccion.options[seleccion.selectedIndex].value); --> Para obtener el "value"
	//alert(seleccion.options[seleccion.selectedIndex].text); --> Para obtener el "texto
}