const fs = require("fs");
const input = fs.readFileSync("input.txt").toString();

console.log(input);

let array = input
                // .toString()
                // .trim()
                .split("\n")
                // .replace("move ", "")
console.log(array);

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
 finalArray.map((e) => {
    for(i=0; i<e[0];i++) {
      crates[e[2]-1].push(crates[e[1]-1].pop())
    }
  })
  console.log("cratesss", crates);

  // const reversedCrates = crates.reverse();
  // console.log(reversedCrates);

  let topElement = [];
  topElement = crates.map((e) => {
    topElement.push(e[e.length-1])
    console.log("TOPELE", topElement);    
  })
  






