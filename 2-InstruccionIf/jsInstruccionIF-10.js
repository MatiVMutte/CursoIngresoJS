/*
	Reta Mutte Matias | DIV D
	IF Ejer 10

	Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
	"EXCELENTE" para notas igual a 9 o 10,
	"APROBÓ" para notas mayores a 4,
	"Vamos, la proxima se puede" para notas menores a 4
*/

function mostrar()
{
	let nota = Math.floor(Math.random()*10+1);

	if(nota == 9 || nota == 10) {
		alert(nota + ": EXCELENTE");
	} else if(nota >= 4 && nota <= 8) {
		alert(nota + ": APROBÓ");
	} else if(nota >= 0 && nota < 4) {
		alert(nota + ": Vamos!!");
	}
}