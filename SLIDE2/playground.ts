//escriba unalgoritmo que lea dos números por tecla e imprima en cosola el resultado de la suma...

import * as rls from "readline-sync";

const vuelta1: number = rls.questionInt("ingresa el tiempo de la primera vuelta");
const vuelta2: number = rls.questionInt("ingresa el tiempo de la segunda vuelta");
const vuelta3: number = rls.questionInt("ingresa el tiempo de a tercer vuelta");
const vuelta4: number = rls.questionInt("ingresa el tiempo de la cuerta vuelta");
const totalTime: number = vuelta1 + vuelta2 + vuelta3 + vuelta4;
const media: number= totalTime /4;

console.log("suma del tiempo total", totalTime);
console.log("El promedio de vueltas es", media);

