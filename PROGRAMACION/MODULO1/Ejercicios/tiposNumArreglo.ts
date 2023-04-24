import * as r from "readline-sync";
const dimension: number = r.questionInt("Ingrese la dimension del arreglo: ")

let arr: number[] = new Array (dimension);
let cero: number= 0;
let positivo : number = 0;
let negativos: number = 0;
for (let i: number = 0; i < arr.length; i++){
    arr[i] = r.questionInt("Ingrese los numeros: ");
    if (arr[i] === 0){
        cero++
    } else if (arr[i] >= 1){
        positivo++
    } else{
        negativos++
    }
} console.log(`cantidad de positivos: ${positivo} cantidad de negativos: ${negativos} y cantidad de ceros:${cero}`);
