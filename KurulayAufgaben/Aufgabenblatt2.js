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


console.log("Aufgabe 3");
console.log();

const readline = require('readline');
const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
		
});

rl.question('Bitte geben sie eine Bewertung ein: ', function(answer){
	
	if(answer > maxHoehe){
	console.log("Sie können maximal nur 5 Sterne vergeben!");
}
	else if(isNaN(answer) == true){
	console.log(answer + "ist keine gültige Bewertung, bitte geben sie eine Zahl ein!");
}
	else{
		console.log("Bewertung ist: " + answer);
	}
	
	rl.close();
	
})

/*var n =  rl.answer;
console.log(n);*/

console.log("Aufgabenblatt 2"),
console.log();

console.log("Aufgabe 1");

let array = ['Name',aktuelleAnz, Bewertung];


console.log("Die Länge des Arrays ist: " + array.length);
console.log();
console.log("Zuletzt eingetragene Bewertung ist: " ,array[array.length-1]);
console.log();

console.log("Aufgabe 2");
console.log();

let ratings = {
	Name:"name",
	aktuelleAnzahl:aktuelleAnz,
	letzteBewertung:Bewertung,
	durchschnitt: function(){
		return this.letzteBewertung / this.aktuelleAnzahl;
	}
};



console.log("Name der Bewertung ist: " + ratings.Name);
console.log("");
console.log("Aufgabe 3");
console.log("Durchschnitt der Bewertungen ist: ", ratings.durchschnitt());

console.log();

console.log("Aufgabe 4");
console.log();

const arrow = () => (Bewertung/aktuelleAnz);
console.log("Der Durchschnitt mit Hilfe von einem Arrow berechnet lautet: ", arrow());
console.log();


console.log("Aufgabe 5");
console.log();

const hello = "hello";

function erstens (){
	
	const world = "World";
	
	var hallo = world.concat(hello);
	
	console.log("Lokale Variable wird mit der globalen Variable konkateniert: ", hallo);
};

erstens();

function zweitens (){
	
	const world = "World";
	
	var Welt = hello.concat(world);
	
	console.log("Variablen hello und world werden in anderer Reihenfolge konkateniert: ", Welt);
};

console.log();
zweitens();













