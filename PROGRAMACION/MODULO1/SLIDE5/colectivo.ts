import * as rls from 'readline-sync';

let colectivo: string = rls.question("llego el colectivo?");

// Asumamos que el usuario solo puede ingresar "S" para si o "N" para no.

while (colectivo == "N"){
    console.log("Siga esperando el colectivo");
   colectivo = rls.question("ya vino el colectivo? ");
   if (colectivo == "S"){
    console.log ("Llego el colectivo subi");
   } else {
    console.log("ingresa una respuesta valida: ");
    colectivo = rls.question("cual es tu nueva respuesta? ");
    console.log ("Llego el colectivo subi");
   }
} 