import * as r from "readline-sync";
const dimension: number = r.questionInt("Ingrese la dimension del arreglo: ")

let arr: number[] = new Array (dimension);

function cargarArreglos(car1: number[]): void {
    if (car1.length === 0) return;
    console.log("Cargar arreglo.");
    for (let i: number = 0; i < car1.length; i++){
    car1[i] = r.questionInt("Ingrese los numeros: ");  
    } console.log("Arreglo cargado.");
}
function mostrarNum (arrM: number[]): void{
    for (let i: number = arrM.length -1; i >=0; i--){
        console.log(arrM[i])
    }
}
cargarArreglos(arr);
mostrarNum(arr)

