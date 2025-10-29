const prompt = require("prompt-sync")();
let N = Number(prompt("Entrez un nombre: "));
if(N%3==0){
    console.log("Tech")
} if(N%5==0){
    console.log("Lead")
} if(N%3==0 & N%5==0){  
    console.log("TechLead")
}else {return N}

