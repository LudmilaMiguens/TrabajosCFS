import * as r from "readline-sync";
let arr1: number[] = new Array(6);
let arr2: number[] = new Array(6);

function cargarArreglos(car1: number[]): void {
    if (car1.length === 0) return;
    console.log("Cargar arreglo.");
    for (let i: number = 0; i < car1.length; i++){
    car1[i] = r.questionInt("Ingrese los numeros: ");  
    } console.log("Arreglo cargado.");
}

function sumaArreglos(arrA:number[], arrB:number[]): number[] {
    let resultado: number[] = new Array (arrA.length);
    if (arrA.length != arrB.length) return[]
    for(let i: number = 0; i < arrA.length; i++){
        resultado[i] = arrA[i] + arrB[i];
    }  return resultado
}
cargarArreglos(arr1);
cargarArreglos(arr2);
console.log(sumaArreglos(arr1,arr2));