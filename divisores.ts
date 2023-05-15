/* implemente un metodo llamado cantidadDeDivisores que reciba un número entero y 
devuelva la cantidad de divisores.
Por ejemplo, para el número 16, sus divisores son 1, 2, 4, 8 y 16, por lo que la respuesta deberia ser 5.
Re-Utilice el metodo esMultiplo implementado para el ejercicio anterior.*/

function cantidadDeDivisores (n: number): number {
    let cantidad: number = 0;
    let resultado: boolean = false;
    for (let i= 1; i <= n; i ++ ){
     resultado = esMultiplo(n,i);
     if (resultado == true)
      cantidad ++;
    }
    return cantidad;
}

function esMultiplo(dividendo: number, divisor: number): boolean {
  if (dividendo % divisor === 0){
      return true; 
  }else {
  return false;
}
} 
console.log ("La cantidad de divisorees es: ", cantidadDeDivisores (16));


