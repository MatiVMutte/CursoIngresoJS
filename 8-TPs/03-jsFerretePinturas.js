/*
    Reta Mutte Matias | DIV D
    TP N°1 Ejer 3

3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let fahrenheit;
    let celsius;

    fahrenheit = document.getElementById("txtIdTemperatura").value;

    fahrenheit = parseFloat(fahrenheit);

    celsius = (fahrenheit - 32) * (5/9);

    alert(fahrenheit + " fahrenheit son " + celsius + " celsius.");
}

function CentigradosFahrenheit () 
{
    let celsius;
	let fahrenheit;
    
    celsius = document.getElementById("txtIdTemperatura").value;

    celsius = parseFloat(celsius);

    fahrenheit = (celsius * (9/5)) + 32;

    alert(celsius + " celsius son " + fahrenheit + " fahrenheit.");
}
