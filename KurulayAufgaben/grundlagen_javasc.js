
console.log();
console.log("Aufgabe 1");
console.log();
console.log("Hallo, ich heiße Hilal"); //Ausgabe auf der Konsole

console.log();
console.log("Aufgabe 2");
console.log();
const maxHoehe = 5;
console.log("Maximale Höhe für die Bewertung einer App beträgt: " + maxHoehe); 
console.log();
var aktuelleAnz;
aktuelleAnz = 100; // 100 Personen haben eine Bewertung abgegeben

var Bewertung = 500; // wenn jeder der 100 Personen 5 Sterne gegeben haben sollte

console.log("Die aktuelle Anzahl der Bewertungen beträgt: " + aktuelleAnz);
console.log();
console.log("Die Bewertung selbst ist : " + Bewertung);
console.log();

console.log("Eine weitere Bewertung wird simuliert");

aktuelleAnz = 101; // es kommt eine weitere Bewertung dazu

Bewertung = 503 // Es wurden drei Sterne vergeben

console.log("Die aktuelle Anzahl der Bewertung beträgt nun: " + aktuelleAnz);
console.log();
console.log("Nun ist die Anzahl der Sterne : " + Bewertung);
console.log();

//Bewertung = 'Hallo' // ich weise dieser Variable einen anderen Typ, also String, um zu schauen was Javascript nun macht
//console.log("Was passiert?" + Bewertung); // Es wird das ausgegeben, es gibt keinen Fehler zurück und gibt das auch was ich zugewiesen habe
console.log();

/*maxHoehe = 10; // ich weise meiner Konstante einen anderen Wert zu */
/* console.log("Die maximale Höhe hat sich verändert, sie beträgt nun: " + maxHoehe); , die Konsole gibt einen Fehler aus, da eine Konstante, die einmal deklariert wurde nicht veränderbar ist*/

console.log();

/*console.log("Aufgabe 3");
console.log();

const readline = require('readline');
const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
		
});

rl.question('Bitte geben sie eine Bewertung ein: ', function(answer){
	console.log("Bewertung ist: " + answer);
	
	if(answer > 5){
	console.log("Sie können maximal nur 5 Sterne vergeben!");
}
	else if(isNaN(answer) == true){
	console.log(answer + "ist keine gültige Bewertung, bitte geben sie eine Zahl ein!");
}
	rl.close();
	
});*/ // Aufgabe 3 muss auskommentiert werden, da sonst die anderen Aufgaben nicht bearbeitet werden können

console.log("Aufgabe 4");
console.log();

var n;

function zufall(maxHoehe){
	n= Math.floor(Math.random(maxHoehe)*Math.floor(maxHoehe)) + 1;
	return n;
}

//console.log("Die zufällig ausgewählte Bewertung lautet: " + zufall(maxHoehe));

var fak = 1;

for(i=1; i<=n; i++) {
	fak = fak*i;
break;
}


console.log("Die zufällige Bewertung ist : " + zufall(maxHoehe));
console.log("Die Anzahl der Bewertungen ist: " + (aktuelleAnz + 1))
console.log("Die aktuelle Bewertung ist: " + (Bewertung + n));

console.log()

console.log("Die Bewertung, die berechnet wurde lautet: ", fak);






/*const readline = require('readline');
const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
		
});

rl.question('Wie oft soll die Bewertung berechnet werden? ', function(n){
	
	for(i=1; i<=n; i++){
		
		console.log()
		console.log("Die zufällige Bewertung ist : " + zufall(maxHoehe));
		console.log("Die Anzahl der Bewertungen ist: " + (aktuelleAnz + 1))
		console.log("Die aktuelle Bewertung ist: " + (Bewertung + a));

		console.log()
	}		
		
		rl.close();
	
});*/

console.log()

console.log("Aufgabe 5")
console.log()

var fak = 1;
function berechn(n){
	for(i=1; i<=n; i++) {
	fak = fak*i;
	}
	return fak;
}

console.log()
console.log("Die zufällige Bewertung ist : " + zufall(maxHoehe));
console.log("Die Anzahl der Bewertungen ist: " + (aktuelleAnz + 1))
console.log("Die aktuelle Bewertung ist: " + berechn(n));















