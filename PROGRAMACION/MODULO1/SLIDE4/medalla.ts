import * as rls from "readline-sync"

const posicion: number = rls.questionInt("Ingrese en que lugar quedo");
let mensaje: string = "";
switch(posicion){
    case 1:
    mensaje == "Medalla de Oro";
    break;
    case 2:
    mensaje == "Medalla de Plata";
    break;
    case 3: 
    mensaje == "Medalla de Broce";
    break;
    default:
    mensaje == "Certificado de participacion";
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

