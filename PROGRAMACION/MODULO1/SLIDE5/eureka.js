"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var contrasenea = "eureka";
var intentos = 3;
while (intentos > 0) {
    var contIntro = rls.question("ingrese su contraseña: ");
    if (intentos--) {
        console.log("clave incorrecta. le quedan", intentos, "intentos");
    }
    else {
        console.log("ingreso correctamente.");
    }
}
if (intentos === 0) {
    console.log("Has agotado todas las oportunidades. Acceso denegado.");
}
console.log("contraseña corecta");
/*let contrasenea : string = "eureka"
let intentos : number =0

for (intentos = 1; intentos <=3; intentos ++){
    contrasenea = rls.question("ingrese su contrasenea: ")
} if (contrasenea == "eureka"){
    console.log("bienvenido");
} else{
    console.log("se agotaron las oportunidades");
}*/ 
