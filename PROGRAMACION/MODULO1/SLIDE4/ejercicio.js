"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var no1 = rls.questionInt("Igrese un numero: ");
var no2 = rls.questionInt("Igrese un numero: ");
var no3 = rls.questionInt("Igrese un numero: ");
/*if (no1 > no2 && no1 > no3){
    console.log("El numero mayor es:", no1);
} else if (no2 > no1 && no2 > no3){
    console.log("El numero mayor es:", no2);
} else {
    console.log ("El numero mayor es: ", no3);
}*/
if (no1 >= no2 && no1 > no3) {
    console.log("El numero mayor es:", no1);
}
else if (no2 > no1 && no2 >= no3) {
    console.log("El numero mayor es:", no2);
}
else if (no3 >= no1 && no3 > no2) {
    console.log("El numero mayor es: ", no3);
}
else if (no1 == no2 && no1 == no3) {
    console.log("El numero mayor es: ", no3);
}
