/*for (let  rueda : number = 1; rueda < 4 ; rueda++) {
    console.log("inflar rueda");
}*/

import * as rls from 'readline-sync';


let nota, suma, promedio, cantNotas, contador : number
contador= 1;
suma = 0;
cantNotas = 5;
for (contador = 1; contador <=5; contador++){
    nota = rls.questionInt("ingrese su nota:", contador);
    suma = suma + nota
}
promedio = suma / cantNotas
console.log ("su promedio es: ", promedio);
