import * as r from "readline-sync";
const dimension: number = r.questionInt("Ingrese la dimension del arreglo: ")
let resultado: number = 0;


let arr: number[] = new Array (dimension);

function tiposDeNumeros(arr2: number[]): number[] {
    let cero: number = 0;
    let positivo: number = 0;
    let negativo: number = 0;

    for (let i: number = 0; i < arr2.length; i++) {
        if (arr2[i] > 0) {
            positivo++;
        } else if (arr2[i] === 0) {
            cero++;
        } else {
            negativo++;
        }
    }

    return [cero, positivo, negativo];
}
tiposDeNumeros(arr)