/*
    Reta Mutte Matias | DIV D
    TP N°1 Ejer 1

    https://onlinegdb.com/p2tGtNaRV

1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let producto1;
    let producto2;
    let producto3;
    let precioTotal;

    producto1 = document.getElementById("txtIdPrecioUno").value;
    producto2 = document.getElementById("txtIdPrecioDos").value;
    producto3 = document.getElementById("txtIdPrecioTres").value;

    producto1 = parseInt(producto1);
    producto2 = parseInt(producto2);
    producto3 = parseInt(producto3);

    precioTotal = producto1 + producto2 + producto3;

    alert("La suma total de todos los productos es: " + precioTotal);
}
function Promedio () 
{
	let producto1;
    let producto2;
    let producto3;
    let promedioTotal;

    producto1 = document.getElementById("txtIdPrecioUno").value;
    producto2 = document.getElementById("txtIdPrecioDos").value;
    producto3 = document.getElementById("txtIdPrecioTres").value;

    producto1 = parseInt(producto1);
    producto2 = parseInt(producto2);
    producto3 = parseInt(producto3);

    promedioTotal = (producto1 + producto2 + producto3) / 3;

    alert("El promedio total de todos los productos es: " + promedioTotal);
}
function PrecioFinal () 
{
	let producto1;
    let producto2;
    let producto3;
    let IVA;
    let precioTotalIVA;

    producto1 = document.getElementById("txtIdPrecioUno").value;
    producto2 = document.getElementById("txtIdPrecioDos").value;
    producto3 = document.getElementById("txtIdPrecioTres").value;

    producto1 = parseFloat(producto1);
    producto2 = parseFloat(producto2);
    producto3 = parseFloat(producto3);

    precioTotalIVA = producto1 + producto2 + producto3;
    IVA = (precioTotalIVA * 21) / 100;
    precioTotalIVA += IVA;

    alert("El total de todos los productos mas el IVA es: " + precioTotalIVA.toFixed(2));
}