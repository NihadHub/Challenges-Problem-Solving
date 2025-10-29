const prompt = require("prompt-sync")();
let table = [];
let taille = Number(prompt("Entrez la taille du tableau: "))
for(let i=0; i<taille;i++){
    let N= Number(prompt("Entrez nombre "+ (i+1)+ ": "))
    table.push(N)
}
let newArray= [...table,...[...table].reverse()]

console.log(newArray);
/* ---AUTRE METHODE UTILISANT LES BOUCLE---
for (let i=table.length-1; i>=0; i--){
newArray.push(table[i])
}
console.log(newArray)
*/ 