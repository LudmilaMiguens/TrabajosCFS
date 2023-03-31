"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var posicion = rls.questionInt("Ingrese en que lugar quedo");
var mensaje = "";
switch (posicion) {
    case 1:
        mensaje = "Medalla de Oro";
        break;
    case 2:
        mensaje = "Medalla de Plata";
        break;
    case 3:
        mensaje = "Medalla de Broce";
        break;
    default:
        mensaje = "Certificado de participacion";
}
console.log(mensaje);
/*if (posicion === 1) {
    mensaje = "Medalla de Oro";
} else if (posicion === 2){
    mensaje= "Medalla de Plata ";
} else if (posicion === 3){
    mensaje = "Medalla Bronce";
} else {
    mensaje = "Certificado de Participacion";
}
console.log (mensaje)*/
