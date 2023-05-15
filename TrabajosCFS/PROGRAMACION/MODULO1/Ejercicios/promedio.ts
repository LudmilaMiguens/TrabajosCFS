/*Realice un programa que devuelva la potencia de un número.
La base y el exponente deben ser ingresados por teclado.
Solo deben admitirse exponentes mayores o iguales a cero.git
Recuerde que el resultado de un número elevado a 0 es 1.
Separe la lógica de calcular la potencia utilizando métodos.*/

import * as rls from "readline-sync";

let alumno: string[] = []
let nota: number[] = []

function cargarArreglo (arr1: string[], arr2: number[]): void {
    let nota1: number;
    let nota2: number;
    let nota3: number;
    let nombre: string = "a";
while (nombre !== ""){ 
    nombre = rls.question("Ingrese el nombre del alumno: ");
    if (nombre !== ""){
         nota1 = rls.questionInt("Ingrese la nota: ");
        if (nota1 > 10 || nota1 < 0){
            nota1 = rls.questionInt("Ingrese una nota menor a 10 o mayor a 0: ");
        }
        nota2 = rls.questionInt("Ingrese la nota: ");
        if (nota2 > 10 || nota2 < 0){
            nota2 = rls.questionInt("Ingrese una nota menor a 10 o mayor a 0: ");
        }
        nota3 = rls.questionInt("Ingrese la nota: ");
        if (nota3 > 10 || nota3 < 0){
            nota3 = rls.questionInt("Ingrese una nota menor a 10 o mayor a 0: ");
        }
      arr1.push(nombre); 
      arr2.push((nota1 + nota2 + nota3)/3); 
    } 
    }
} 
function buscarAlumno (arrA: string[], arrB: number[]): void{
    let buscar: string = rls.question("Ingrese el alumno que quiere buscar: ");
    let posicion: number = -1
    for(let i = 0; i < arrA.length; i ++ ){
        if (arrA[i] === buscar){
            posicion = i;
            break;
        } 
    }
    if (posicion !== -1){
        console.log(`El alumno ${arrA[posicion]} tiene un promedio de ${arrB[posicion]}%`);
    } else{
        console.log("El alumno no se encuentra en la lista.");
    }
}
cargarArreglo(alumno, nota);
buscarAlumno(alumno, nota);