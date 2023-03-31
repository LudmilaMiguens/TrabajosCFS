import * as rls from 'readline-sync';

const contrasenea : string = "eureka"
let intentos : number = 3
let contIntro : string =""

while (intentos >0 && contIntro != contrasenea ){
    contIntro = rls.question("ingrese su contraseña: ");
    intentos --; 
}
if (contrasenea === contIntro){
        console.log("ingreso correctamente.") 
} else{
    console.log("Usuario bloqueado")
}


/*while (intentos >0){
    contIntro = rls.question("ingrese su contraseña: ");
    if (contrasenea === contIntro){
        console.log("ingreso correctamente.") 
      break;   
    } 
    else {
        intentos--;
        console.log ("clave incorrecta. le quedan", intentos, "intentos");
    }
} if (intentos === 0){
    console.log("Has agotado todas las oportunidades. Acceso denegado.");
} 


/*let contrasenea : string = "eureka"
let intentos : number =0

for (intentos = 1; intentos <=3; intentos ++){
    contrasenea = rls.question("ingrese su contrasenea: ")
} if (contrasenea == "eureka"){
    console.log("bienvenido");
} else{
    console.log("se agotaron las oportunidades");
}*/