const prompt = require("prompt-sync")();
let texte = prompt("Entrez une chaine: ")
function compterVoyelles(chaine){
    let voyelles= "aeiouyAEIOUY";
    let compteur=0;
    for(let i=0; i<chaine.length; i++){
        if (voyelles.includes(chaine[i])){
        compteur++;
    }
    
}
 return compteur
}
console.log(compterVoyelles(texte))