import * as r from "readline-sync";
const dimension: number = r.questionInt("Ingrese la dimension del arreglo: ")

let arr: number[] = new Array (dimension);

function cargarArreglo(arr1: number[]): void {
    for (let i : number = 0; i < arr1.length; i++){
        arr1[i] = r.questionInt("Ingrese los numeros: ")  
} 
}

function tiposDeNumeros(arr2: number[]): number {
let cero: number= 0;
let positivo : number = 0;
let negativo: number = 0;
    for (let i: number = 0; i < arr2.length; i ++){
        if (arr2[i] > 1) {
            positivo++
        } else if (arr2[i] === 0) {
            cero++
        } else {
            negativo++
        }
    } console.log(`Cantidad de ceros: ${cero}. Cantidad de positivos: ${positivo}. Cantidad de negativos: ${negativo}.`)
    return cero; positivo;  negativo // No puedo hacer que la funcion retorne sola sin usar el el console.log 
}
cargarArreglo(arr)
tiposDeNumeros(arr)