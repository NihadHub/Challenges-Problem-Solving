const prompt = require("prompt-sync")();

let nombre = Number(prompt("Entrez le nombre d'escaliers: "));
function façonsArriver(nombre){
     if (nombre<=2){
       return nombre }
       else{
               return façonsArriver(nombre-1) + façonsArriver(nombre-2)

       }
       return façonsArriver(nombre-1) + façonsArriver(nombre-2)
     
}
console.log(façonsArriver(nombre));

   
