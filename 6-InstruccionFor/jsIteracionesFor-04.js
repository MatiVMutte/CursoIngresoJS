function mostrar()
{
	let repetir;
	let respuesta;
	repetir = true;
	respuesta = true;

	for(let i = 0; repetir; i++) {
		if(respuesta == false) {
			break; // Sale de la estructura
		}
		alert("Repeticion: " + (i+1));
		respuesta = confirm("Desea seguir?");
	}
}//FIN DE LA FUNCIÓN