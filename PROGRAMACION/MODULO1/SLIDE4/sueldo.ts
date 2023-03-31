import * as rls from "readline-sync"

let sueldo: number = rls.questionInt("suelto del empleado");
if (sueldo < 15000){
    console.log("sueldo con aumento", sueldo * 1.20);
} else if (sueldo > 15001 && sueldo < 20000){
    console.log ("sueldo con aumento", sueldo * 1.10);
} else if (sueldo > 20001 && sueldo < 25000){
    console.log("sueldo con aumento", sueldo *1.05);
} else if (sueldo > 25000) {
 console.log ("sueldo con aumento", sueldo);
}
   

    
