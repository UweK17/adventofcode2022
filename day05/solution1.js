const fs = require("fs");
const input = fs.readFileSync("input.txt").toString();

console.log(input);
// array splitten wie immer
let array = input
                // .toString()
                // .trim()
                .split("\n")
                // .replace("move ", "")
console.log(array);

//move, from to durch nichts ersetzen.

const arrayWithoutMove = array.map((e) => 
  e.replace("move ", "")
)
//                 // .map((e) => {
//                 //   e.replace("move ", "")
//                 // })
//                 // .split("\n")
                
console.log(arrayWithoutMove);

const arrayWithoutFrom = arrayWithoutMove.map((e) => 
  e.replace("from ", "")
)
  console.log(arrayWithoutFrom);

  const arrayWithoutTo = arrayWithoutFrom.map((e) => 
  e.replace("to ", "")
)
  console.log(arrayWithoutTo);

  // und letztes spltten, dass nur zahlen(als String) im array sind
  const finalArray = arrayWithoutTo.map((e) => 
  e.split(" ")
)
  console.log("testt", finalArray);


 


//Im Array kann das move, from und to nicht entfernt werden, also muss es im input passieren, 
// arrayWithoutMove = array.map((e) => {
//   e.replace("move ", "");
// })

// console.log(arrayWithoutMove);

// Es geht immer nur ums pushen und poppen.

let crates = [
  ["Q", "S", "W", "C", "Z", "V", "F", "T"],
  ["Q", "R", "B"],
  ["B", "Z", "T", "Q", "P", "M", "S"],
  ["D", "V", "F", "R", "Q", "H"],
  ["J", "G", "L", "D", "B", "S", "T", "P"],
  ["W", "R", "T", "Z"],
  ["H", "Q", "M", "N", "S", "F", "R", "J"],
  ["R", "N", "F", "H", "W"],
  ["J", "Z", "T", "Q", "P", "R", "B"]
]

// [
//   ["Z", "N"],
//   ["M", "C", "D"],
//   ["P"]
// ]

//durch das array iterieren, und bei jedem element die for schleife so oft durchlaufen, wie der index 0 anzeigt. dann wird vom index 2 des crates das teil genommen und zum index 3 des crates kopiert, danach wird das teil vom crate index 2 gelöscht(pop), in diesem Beispiel
 finalArray.map((e) => {
    for(i=0; i<e[0];i++) {
      crates[e[2]-1].push(crates[e[1]-1].pop())
    }
  })
  console.log("cratesss", crates);

// das jeweilige topElement des crates wird in das array toPElement gepusht, e.length-1 gibt das jeweils letzte element im array e an
  let topElement = [];
  topElement = crates.map((e) => {
    topElement.push(e[e.length-1])
    console.log("TOPELE", topElement);    
  })
  






