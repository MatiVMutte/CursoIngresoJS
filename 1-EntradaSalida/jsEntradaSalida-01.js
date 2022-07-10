/*
	Reta Mutte Matias | DIV D
	Ejer 2 Sabado Practica

		La juguetería El MUNDO DE OCTAVIO nos encarga un programa para conocer qué
		cantidad de materiales se necesita para la fabricación de distintos juguetes.

			AB = Diámetro mayor
			DC = diámetro menor
			BD y BC = lados menores
			AD y AC = lados mayores

		Todos los datos se ingresan por prompt.
		Debemos tener en cuenta que la estructura del cometa estará dada por un 

		PERIMETRO de VARILLAS DE PLASTICO y los correspondientes entrecruces (DC y AB) 
		
		del mismo material para mantener la forma del cometa.
		El cometa estará construido con papel de alta resistencia. La cola del mismo se construirá
		con el mismo papel que el cuerpo y representará un 10% adicional del necesario para el
		cuerpo.
		Necesitamos saber CUANTOS Mts de VARILLAS de plástico y CUANTOS de PAPEL son necesarios
		para la construcción en masa de 10 cometas. 

		Tener en cuenta que los valores de entrada están expresados en Cms.
	*/

	function mostrar() {
		// Creacion de Variables
			// Pedir al usuario
				let diametroMayor;
				let diametroMenor;
	
			// Para el Papel
				let papelArea;
				let cola;
			// Para las Varillas
				let ladoMenor;
				let ladoMayorDiv;
				let ladoMayor;
				let varillas;
	
		// Pido los diametros al usuario
			diametroMayor = parseFloat(prompt("Ingrese la medida del Diametro mas Grande"));
			diametroMenor = parseFloat(prompt("Ingrese la medida del Diametro mas Chico"));
	
		// Sacar cantidad de PAPEL
			papelArea = (diametroMayor * diametroMenor) / 2; // Formula para sacar el area de una Cometa con solo los Diametros
			cola = (papelArea * 10) / 100; // Calculo el 10% mas que necesito para la cola
			papelArea = ((papelArea + cola) / 10000) * 10; // Agrego ese 10% extra. Convierto los CM^2 a M^2. Y multiplico por 10 Cometas mas
	
			alert("Se necesitan " + papelArea.toFixed(2) + " Metros Cuadrados de Papel para 10 Cometas.");
	
			// Cometa BICOLOR
				papelArea /= 2; // Reparto la cantidad de papel para cada color
				alert("Se necesitan " + papelArea.toFixed(2) + " Metros Cuadrados de Papel de cada color para las 10 Cometas.");
	
		// Sacar cantidad de Varillas
			ladoMenor = diametroMenor / 2; // Agarro la mitad de la base del triangulo Equilatero superior. Para asi despues mediante Pitagoras sacar el lado mas largo
			ladoMayorDiv = diametroMayor - ladoMenor; // Al diametro mayor le resto la altura del triangulo superior para saber la altura del triangulo inferior.
	
			ladoMayor = pitagoras(ladoMenor, ladoMayorDiv); // Pitagoras --> Una ves tengo Ambos catetos(o lados A y B) solo falta sacar(C) Hipotenusa --> LadoMayor
	
			varillas = (((ladoMayor * 2) + (ladoMenor * 2) + diametroMayor + diametroMenor) / 100) * 10; // Sumo todas las Varillas. Convierto CM a M. Multiplico por 10 Cometas.
	
			alert("Se necesitan " + varillas.toFixed(2) + " Metros de Varillas para 10 Cometas.");
	
	}
	
	// Funcion que cree para el uso de Pitagoras --> Cuando tenemos de incognita la C(Hipotenusa) --> LadoMayor del Triangulo Inferior
	function pitagoras(a, b) {
		// Uso el Objeto Math
		return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)); // Llamada a la funcion SQRT --> Raiz Cuadrada. Funcion POW --> Potencia Cuadrada
	}
	
	
