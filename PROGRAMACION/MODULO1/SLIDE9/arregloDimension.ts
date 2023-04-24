import * as rls from "readline-sync";
const arregloDimension : number = rls.questionInt("ingrese la dimension del arreglo: ");

let nombres : string[] = new Array(arregloDimension); //Arreglo

for (let i = 0; i < nombres.length; i ++){
    nombres[i] = rls.question("nombre: ")
} 