const fs = require("fs");
const input = fs.readFileSync("input.txt").toString();

console.log(input);

// Stundenlang probiert, bis ich zufällig auf Array.from gestoßen bin. Nie hab ich nach dem split ein Array wieder bauen können, wo die beiden "Elfen" vergleichbar sind. "Array.fromt eine shallow-Kopie von einem iterablen array-like Object.

const comparableArray = input.toString().trim().split("\n").map((e) => {
  //matchAll: e ist der String, für den die matches gefunden werden müssen, und Ergebnis wird mit parseInt manipuliert, String to Integer
  // /g-Flag ist dafür da, das ALLE Matches gefunden werden, und nicht nach dem ersten Match abgebrochen wird.
  // \d = findet alle digit. ist, als ob man 0-9 schreibt: ******  /\d = /[0-9]   ******
  // match ist das passende gefundene Match und wird zum Integer gemacht
  return Array.from(e.matchAll(/\d+/g), (match) => Number.parseInt(match, 10))
});

// result gibt die Anzahl an Matches wieder, wo ein Elfbereich komplett im anderen Elfbereich ist
// filter macht eine shallow-Kopie mit den herausgefilterten elementen, die den Kriterien entsprechen

const result = comparableArray.filter(([elf1Start, elf1End, elf2Start, elf2End]) => {
  return(
    // Start- und Endwerte der beiden Elfen werden vergleichen, um sicherzustellen, das ein Elfbereich komplett vom 2. Elfbereich abgedeckt wird
    (elf1Start >= elf2Start && elf1End <= elf2End) || (elf1Start <= elf2Start && elf1End >= elf2End)
  );
  // ohne dieses ".length" werden alle Arrays ausgegeben und man muss per Hand zählen. .length gibt die Anzahl der Arrays an, hier 588.
}).length;

console.log(result);



