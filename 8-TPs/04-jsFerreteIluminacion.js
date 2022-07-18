/*
    !Reta Mutte Matias | DIV D
    !TP N°2 Ejer 1
    
    * ENTREGADO

4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

 function CalcularPrecio () 
{
    let select;
    let marcaLamparita;
    let cantidadLamparita;
    let descuento;
    let mensaje;
 	let precioLampara = 35.00;

    cantidadLamparita = document.getElementById("txtIdCantidad").value;
    select = document.getElementById("Marca");

    cantidadLamparita = parseInt(cantidadLamparita);
    marcaLamparita = select.options[select.selectedIndex].text;

    precioLampara = precioLampara * cantidadLamparita;

    if(cantidadLamparita > 5) { // !A
        descuento = (precioLampara * 50) / 100;
        precioLampara = precioLampara - descuento;
    } else if(cantidadLamparita == 5) { //!B
        if(marcaLamparita == "ArgentinaLuz") {
            descuento = (precioLampara * 40) / 100;
        }else {
            descuento = (precioLampara * 30) / 100;
        }
        precioLampara = precioLampara - descuento;
    } else if(cantidadLamparita == 4) { //!C
        if(marcaLamparita == "ArgentinaLuz" || marcaLamparita == "FelipeLamparas") {
            descuento = (precioLampara * 25) / 100;
        }else {
            descuento = (precioLampara * 20) / 100;
        }
        precioLampara = precioLampara - descuento;
    } else if(cantidadLamparita == 3){ // !D
        if(marcaLamparita == "ArgentinaLuz") {
            descuento = (precioLampara * 15) / 100;
        } else if(marcaLamparita == "FelipeLamparas") {
            descuento = (precioLampara * 10) / 100;
        } else {
            descuento = (precioLampara * 5) / 100;
        }
        precioLampara = precioLampara - descuento;
    }

    if(precioLampara > 120) { // !E
        let aumento;
        aumento = (precioLampara * 10) / 100;
        precioLampara = precioLampara + aumento;
        alert("IIBB Usted pago $" + aumento);
    }

    mensaje = "Compraste " + cantidadLamparita + " lamparas. Precio Final: $" + precioLampara;
    document.getElementById("txtIdprecioDescuento").value = mensaje;
}