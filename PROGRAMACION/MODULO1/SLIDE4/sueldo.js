"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var sueldo = rls.questionInt("suelto del empleado");
if (sueldo < 15000) {
    console.log("sueldo con aumento", sueldo * 1.20);
}
else if (sueldo > 15001 && sueldo < 20000) {
    console.log("sueldo con aumento", sueldo * 1.10);
}
else if (sueldo > 20001 && sueldo < 25000) {
    console.log("sueldo con aumento", sueldo * 1.05);
}
else
    (sueldo > 25000);
{
    console.log("sueldo con aumento", sueldo);
}
