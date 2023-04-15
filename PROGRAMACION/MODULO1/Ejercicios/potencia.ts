/*Realice un programa que devuelva la potencia de un número.
La base y el exponente deben ser ingresados por teclado.
Solo deben admitirse exponentes mayores o iguales a cero.
Recuerde que el resultado de un número elevado a 0 es 1.
Separe la lógica de calcular la potencia utilizando métodos.*/

import * as rls from "readline-sync";

let base = rls.questionInt("Ingrese la base: ");
let exponente = rls.questionInt("Ingrese el exponente: ");

function resultadoPotencia(base: number, exponente: number): number{
   let resultado : number;
    if (exponente < 0){
        console.log("Ingrese un exponente mayor a cero.");
        exponente = rls.questionInt("Ingrese el exponente: ");
    } resultado = (base ** exponente); 
return resultado; 
};
 
console.log("el resultado es: ", resultadoPotencia(base, exponente));