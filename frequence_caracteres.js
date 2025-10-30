const prompt = require("prompt-sync")();
let texte = prompt("Entrez une chaine : ")
let compteur = {};
    for (let caractere of texte){
        if(compteur[caractere]){
            compteur[caractere]++
        }else{
          compteur[caractere]=1  
        }
       
    }
    console.log(compteur)
