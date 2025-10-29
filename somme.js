const prompt = require("prompt-sync")();
let table= [];
let somme=0;
let taille = Number(prompt("Entrez la taille du tableau: "))
for(let i=0; i<taille;i++){
    let N= Number(prompt("Entrez nombre "+ (i+1)+ ": "))
    table.push(N)
}
for(let i =0; i<taille; i++){
    if (table[i]<0){
        break;
    }
    somme=somme+table[i]
}
console.log("la somme jusqu'à un nombre negatif est: ", somme)