//Multiplicar dos números sin usar el signo de multiplicación
const multiplica = (a, b) => {
    let resultado = 0
    const positivo = Math.abs(b) == b
    for (i = 0; i < Math.abs(b); i++) {
        resultado = positivo ? resultado + a : resultado - a
    }
    return resultado
}

 const a = multiplica(50, 25)
 console.log(a)