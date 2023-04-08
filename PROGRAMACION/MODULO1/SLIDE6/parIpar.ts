import * as rls from "readline-sync"
let inputNum:number = 0
while (inputNum <= 0){
 inputNum = rls.questionInt("ingrese un numero");
} 

if (inputNum % 2 === 0){
    console.log("es par")
} else{
    console.log("es impar")
}
