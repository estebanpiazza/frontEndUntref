let nombre = "Esteban" //el largo es 7, pero el ultimo caracter esta en la posición 6
console.log(nombre)
console.log(nombre.length) // largo
//length es un metodo de string
console.log(nombre.toUpperCase()) //me pasa el string a mayuscula
console.log(nombre.toLowerCase()) //me pasa el string aminuscula

let nombreEspaciado = " Esteban "
console.log(nombreEspaciado)   
console.log(nombreEspaciado.trim()) // quitar espacios al principio y al final de un string

// metodo para saber que caracter esta en una posición en especifico
console.log(nombre.charAt(0)) // me indica que caracter esta en la posición indicada como parametro
console.log(nombre.charAt(1))


// indexOF
console.log(nombre.indexOf("t")) // 2
console.log(nombre.indexOf("z")) // -1

// cortar un string
let frase = "En un lugar de la mancha"
// primer parametro es la ubicación inicial
//segundo parametro es la ubicación final
console.log(frase.slice(3,6))
console.log(frase.slice(8))
console.log(frase.slice(-6))

// substring
//primer parametro es la ubicación inicial
//segundo parametro es cuantos espacios voy a contar hasta cortar
console.log(frase.substr(3,6))


//metodo replace
let palabra = "Mordor"
//primer parametro es el string a reemplazar
//el segundo parametro es el string que reemplaza
console.log(frase.replace("la mancha",palabra))
console.log(frase.replace("lugar","espacio"))

