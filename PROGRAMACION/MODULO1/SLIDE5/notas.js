"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var nota, suma, promedio, cantNotas, contador;
contador = 1;
suma = 0;
cantNotas = 10;
while (contador <= cantNotas) {
    nota = rls.questionInt("ingrese una nota: ");
    suma = suma + nota;
    console.log("interacion nro: ", contador, "valor parcial de la suma: ", suma);
    contador = contador + 1;
}
promedio = suma / cantNotas;
console.log("el promedio de tu nota es: ", promedio);
