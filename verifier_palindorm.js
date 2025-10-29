const prompt = require("prompt-sync")();
let texte = prompt("Entrez une chaine : ")
function Palindorm(chaine){
    chaine = chaine.toLowerCase();
    let inverse = chaine.split("").reverse().join("");
    if(chaine===inverse){
        console.log("true")
    }else{
        console.log("false")
    }
}
Palindorm(texte)
