import * as rls from "readline-sync"
let n1 : Number = 0; 
n1 = rls.questionInt ("Ingresa un N°");

if (n1 === 0){
    console.log("el numero escero")
} else if (parseInt(n1) % 2 === 0){
    console.log("el numero es par", n1)
} else {
    console.log("el numero es impar", n1)
}
