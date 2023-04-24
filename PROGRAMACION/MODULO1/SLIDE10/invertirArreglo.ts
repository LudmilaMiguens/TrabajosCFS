/*• Almacene en un arreglo de tamaño N los números ingresados
por el usuario
• La dimensión N también es ingresada por el usuario
• Muestre los números del arreglo pero del último al primero*/
import * as r from "readline-sync";
const dimension: number = r.questionInt("Ingrese la dimension del arreglo: ")

let arr: number[] = new Array (dimension);

for (let i: number = 0; i < arr.length; i++){
    arr[i] = r.questionInt("Ingrese los numeros: ");
}
for(let i = arr.length -1; i >=0; i--){
    console.log(arr[i]);
}