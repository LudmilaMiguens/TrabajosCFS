/*Cree un método esMultiplo con 2 parámetros que devuelva el valor lógico Verdadero
o falso según si el primer numero que se indique como parámetro es múltiplo del segundo.
Recuerde que un número es múltiplo de otro si al dividir su resto es cero.
Recuerde que la operación mod permite saber si el resto de un división es cero.*/

function esMultiplo(dividendo: number, divisor: number): boolean {
    if (dividendo % divisor === 0){
        return true; 
    }else {
    return false;
}
} 
console.log("Es", esMultiplo(43,8));