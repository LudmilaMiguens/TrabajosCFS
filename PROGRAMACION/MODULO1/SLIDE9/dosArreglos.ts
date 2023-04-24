/*Construya un algoritmo que tenga dos arreglos uno que almacene 2 nombres y 
otro que almacene 3 números ambos ingresados por el usuario. 
Al final debe imprimir los valores por consola.*/
import * as rls from "readline-sync";

let nombres : string[] = new Array (2);
let numeros : number[] = new Array (3);

for (let i = 0; i < nombres.length; i ++){
   nombres[i] = rls.question("nombre: ");
}
for (let i = 0; i < numeros.length; i ++){
    numeros[i] = rls.questionInt("numero: ");
}