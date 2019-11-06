//Grundlagen des Web
//Aufgabe 1
console.log("---I---");
console.log("");
console.log("Mein Name ist: Oya Aydin"); //Ausgabe meines Namens auf der Konsole 
console.log("");



//Aufgabe 2

console.log("---II---");
//Diese Kosntante steht für die maximale Höhe der möglichen Bewertung 

const max_höhe= 5;

var aktuelle_anzahl=100;//Es haben insgesamt 100 Nutzer bewertet
var aktuelle_bewertung= 500; //ich gehe davon aus, das jeder die App mit 5 bewertet hat 


console.log("");
console.log("\tDies ist eine Bewertung!:");
console.log("");
console.log("Maximale Bewertung:",max_höhe);
console.log("Es haben insgesamt bewertet:",aktuelle_anzahl);
console.log("Die aktuelle Bewertung beträgt:",aktuelle_bewertung);
console.log("");

//simulierte Bewertung
//Variablen einen anderen Typ zuweisen 

//let aktuelle_anzahl= 101; //eine simulierte Bewertung
//let aktuelle_bewertung= 503; //nächste Bewertung mit 3 Sternen 

console.log("\tEine neue Bewertung ist eingegangen!");
console.log("\tDie Werte werden aktualisiert");
console.log("\t...");

aktuelle_anzahl=101; //neue Person hat bewertet
aktuelle_bewertung=503;// eine neue Bewertung addiert 

console.log("Neue insgesamte Bewertung:",aktuelle_anzahl);
console.log("Neue aktuelle Bewertung beträgt:",aktuelle_bewertung);

console.log("");
//der Konstante einen neuen Wert zuweisen, nach deklaration 

//var max_höhe=10; //der Konstante einen neuen Wert zugewiesen 

//was passiert, wenn man einer Kostante einen neue Wert gibt ?

//eine Kostante deklariert eine unveränderliche Variable,also passiert da garnichts

 //was passiert, wenn man eine Variable einen neue Wert gibt ?
 //var deklariert eine Variable unabhängig von ihrem Scope
 //let delklariert eine lokale Variable im Block Scope
 //somit geht es, kann sich der Wert ändern 

//Aufgabe 3
// von der Konsole einlesen 


console.log("");
console.log("\t---III---");


const readline = require('readline');
const rl = readline.createInterface ({
input : process.stdin,
output : process.stdout

});

rl.question("Bitte bewerten Sie die App:",function(answer) {

('Ihre Bewertung: ', function(answer) {
if(answer > max_höhe ||answer < 0) { //Konstante beachten const=5
console.log("Achtung! Die maximale Bewertung sind 5 Sterne!");
}
else if(isNaN(answer)==true) { //Fehlermeldung wenn das ein non integerwert ist 
console.log(input + "Dies ist keine Zahl,bitte geben Sie eine Zahl von 1 bis 5 ein!");
}
else {
console.log(answer); // Input : Eingabe = Eingabe vom Nutzer 
}
rl.close(); //Prozess wird beendet 

});

// Kien Übergang 
// zufällige Bewertungen der Nutzer soll keins mehr eingeben !

console.log("");

//Aufgabe 4
// Fakultät

console.log("---IV---");
var n;

function random(max_höhe) {
//Math.floor()- rundet jede Zahl auf die nächst niedrigere ganze Zahl ab 
n= Math.floor(Math.random(max_höhe)*Math.floor(max_höhe)) + 1; //Math.random() liefert....
return n;

}

console.log("Eine zufällige Bewertung:",random(max_höhe));

/* 
var fak = 1;

for(i=1; i<=n; i++) {
fak= fak+i;

}

console.log("");
console.log("Die aktuelle Bewertung:",aktuelle_anzahl + 1);
console.log("Die gesamt Bewertungen",aktuelle_bewertung + n);
//Fakultät n!
console.log("Die berechnete Bewertung:",fak);
*/
console.log("");
console.log("---V---");

var fak = 1;
function berechnung(n) {

for (i=1; i<=n; i++) {
fak= fak*i;
}
return fak;
}
console.log("");
console.log("Die aktuelle Bewertungen:",aktuelle_anzahl + 1);
console.log("Die gesamt Bewertungen:", aktuelle_bewertung + n);
console.log("Die berechnete Bewertung:", berechnung(n));

//Aufgabenblatt 2 

console.log("");
console.log("---Aufgabenblatt 2---");
console.log("");
let array = ['AppBewertung',aktuelle_anzahl,answer];                               // Array angelegt mit Name der Bewertung,Anzahl der abgegebenen Bewertungen und zuletzt eingetragene Bewertung
console.log("");
console.log("Die Länge des Arrays:", array.length);                               // gibt länge
console.log("Der zuletzt eingetragene Bewertung: ",array[array.length-1]);        // gibt letzte Bewertung aus



console.log("");
console.log("\t---Aufgabe 2 Object---");


let ratings = new Object();
ratings.name ="AppBewertung";
ratings.letzte_bewertung = aktuelle_bewertung;
ratings.aktuelle_Bew = aktuelle_anzahl;
ratings.durchschnitt = function() {
return this.letzte_bewertung/this.aktuelle_Bew;  //Berechnung und Ausgabe der Bewertung 
}
console.log("Der Name der Bewertung:",ratings.name);
console.log("Durchschnitt: ",ratings.durchschnitt());

console.log("");
console.log("\t---Aufgabe 4 Arrow---");
console.log("");

const arrow = () => (aktuelle_bewertung/aktuelle_anzahl);                                    // arrow function
								        	// short  
console.log("Arrow", arrow());


console.log("");
console.log("\t---Aufgabe 5 Scope---");
console.log("");


const hello = "hello";

function scope1 () {                                   
	const world = "World";         
	let nameone = world.concat(hello);                                     // Methode String.concat() = world mit hello konkateniert = Worldhello

console.log("\tKonkatenieren:" ,nameone);
}

scope1();

function scope2 () {
	const world = "World";
	let nametwo = hello.concat(world);                                     // Richtige Reigenfolge =hello mit world konkateniert => helloWorld

console.log("\tKonkatenieren:",nametwo);
}
scope2();

});




