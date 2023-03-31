"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var n1 = rls.questionInt("Ingresa un N°");
if (n1 == 0) {
    console.log("el numero escero");
}
else if (n1 % 2 == 0) {
    console.log("el numero es par", n1);
}
else {
    console.log("el numero es impar", n1);
}
