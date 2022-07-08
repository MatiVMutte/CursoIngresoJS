/*
    Reta Mutte Matias | DIV D
    TP N°1 Ejer 2

    https://onlinegdb.com/N_qvyapVU

    ENTREGADO

2.	Para el departamento de Construcción:
A.	mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

// A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
function Rectangulo () 
{
    let largo;
    let ancho;
    let perimetro;
    let cantidadAComprar;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    largo = parseFloat(largo);
    ancho = parseFloat(ancho);

    perimetro = ((largo*2) + (ancho*2));
    cantidadAComprar = perimetro * 3;

    alert("Cantidad de alambre a comprar: " + cantidadAComprar.toFixed(2));
}

// B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
function Circulo () 
{
    let radio;
    let cantidadAComprar;
    const PI = Math.PI;

    radio = document.getElementById("txtIdRadio").value;
    radio = parseFloat(radio);

    cantidadAComprar = (2*PI*radio) * 3;

	alert("Cantidad de alambre a comprar: " + cantidadAComprar.toFixed(2));
}

// C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
function Materiales () 
{
	let largo; // = 1 | 
                        // area = 1 --> 2 de cemento y 3 de cal
    let ancho; // = 1 |
    let cemento = 2;
    let cal = 3;
    let area;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    largo = parseFloat(largo);
    ancho = parseFloat(ancho);

    area = largo * ancho;

    cemento *= area; // Es lo mismo que decir --> cemento = cemento * area;
    cal *= area; // Es lo mismo que decir --> cal = cal * area;

    /*alert("Para cubrir " + area + "M de piso. Se necesita:\n\t"
                                                + cemento + " bolsas de cemento.\n\t"
                                                + cal + " bolsas de cal.");*/

    alert("Para cubrir " + area + "M de piso. Se necesita: "+ cemento + " bolsas de cemento. Y " + cal + " bolsas de cal.");
}