/*
	Reta Mutte Matias | DIV D
	IF Ejer 8

	Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'
*/

function mostrar()
{
	let edad;
	let select;
	let estadoCivil;

	edad = document.getElementById("txtIdEdad").value;
	select = document.getElementById("estadoCivil");

	if(edad != "") {
		if(!isNaN(edad)) {
			edad = parseInt(edad);
			estadoCivil = select.options[select.selectedIndex].text;
			estadoCivil = estadoCivil.toLowerCase();

			if(edad < 18 && estadoCivil != "soltero") {
				
			} else if(edad > 18 && estadoCivil == "soltero") {
				alert("Es soltero y no es menor");
			}
		} else{
			alert("Debe ingresar su edad en numeros");
		}
	} else {
		alert("Campo esta vacio");
	}
}