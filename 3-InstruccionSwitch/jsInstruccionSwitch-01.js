/*
	Reta Mutte Matias | DIV D
	Switch - Ejer 01

	ENTREGADO

	al seleccionar un mes informar.
	si es Enero: "que comiences bien el año!!!."
	si es Marzo: "a clases!!!."
	si es Julio: "se vienen las vacaciones!!!."
	si es Diciembre: "Felices fiesta!!!."
*/

function mostrar()
{
	//tomo el mes
	let mesDelAño =txtIdMes.value;

	switch (mesDelAño) {
		case "Enero":
			alert("Que comiences bien el año!!!");
			break;
		case "Marzo":
			alert("A clases!!!");
			break;
		case "Julio":
			alert("Se vienen las vacaiones!!!");
			break;
		case "Diciembre":
			alert("Felices Fiesta!!!");
			break;
	}


}//FIN DE LA FUNCIÓN