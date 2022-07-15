/*
    !Reta Mutte Matias | DIV D
    !TP N°2 Ejer 1
    TODO Hola jeje
    ?Oaa
    *Es Genial
4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function getDescuento(precioLampara, porcientoDescuento) {
    descuento = (precioLampara * porcientoDescuento) / 100;
    return precioLampara - descuento;
}

function CalcularPrecio () 
{
    let select;
    let marcaLamparita;
    let cantidadLamparita;
    let descuento;
    let mensaje;
 	let precioLampara = 35.00;

    cantidadLamparita = document.getElementById("txtIdCantidad").value
    select = document.getElementById("Marca");

    cantidadLamparita = parseInt(cantidadLamparita);
    marcaLamparita = select.options[select.selectedIndex].text;

    precioLampara = precioLampara * cantidadLamparita;

    if(cantidadLamparita > 5) { // !A
        precioLampara = getDescuento(precioLampara, 50);
    } else if(cantidadLamparita == 5 && marcaLamparita == "ArgentinaLuz") { //!B
        precioLampara = getDescuento(precioLampara, 40);
    } else if(cantidadLamparita == 5 && marcaLamparita != "ArgentinaLuz") { 
        precioLampara = getDescuento(precioLampara, 30);
    } else if(cantidadLamparita == 4 && (marcaLamparita == "ArgentinaLuz" || marcaLamparita == "FelipeLamparas")) { // !C
        precioLampara = getDescuento(precioLampara, 25);
    } else if(cantidadLamparita == 4 && (marcaLamparita != "ArgentinaLuz" || marcaLamparita != "FelipeLamparas")) {
        precioLampara = getDescuento(precioLampara, 20);
    } else if(cantidadLamparita == 3 && marcaLamparita == "ArgentinaLuz"){ // !D
        precioLampara = getDescuento(precioLampara, 20);
    } else if(cantidadLamparita == 3 && marcaLamparita == "FelipeLamparas"){
        precioLampara = getDescuento(precioLampara, 10);
    } else if(cantidadLamparita == 3 && (marcaLamparita != "FelipeLamparas" && marcaLamparita != "ArgentinaLuz")){
        precioLampara = getDescuento(precioLampara, 5);
    } 
    
    if(precioLampara > 120) { // !E
        let aumento = (precioLampara * 10) / 100;
        precioLampara = precioLampara + aumento;
        alert("IIBB Usted pago $" + aumento);
    }

    mensaje = "Compraste " + cantidadLamparita + " lamparas. Precio Final: $" + precioLampara;
    document.getElementById("txtIdprecioDescuento").value = mensaje;
}