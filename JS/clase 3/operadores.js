// Operadores - CheatSheet

// Operador de asignación
// asignar un valor a una variable

let pi = 3.14 // operador de asignación? =
let uno = 1 
/* pi = pi + uno
console.log(pi) */
pi += uno // operador de adición? +=
console.log(pi)
// pi = pi - uno
pi -= uno // operador de resta? -=
console.log(pi)
pi *= uno //operador de multiplicacion
pi /= uno // operador de división
pi %= uno // resto de la división
pi **= uno // potencia


//Operadores de comparación

// == compara el valor
// === compara el valor y el tipo de dato
let numero = 1
let numeroString = "1"
console.log(typeof(numero)) //Number
console.log(typeof(numeroString)) // String
console.log(numero == numeroString ) //true, xq el valor es el mismo, 1
console.log(numero === numeroString) // false, xq el tipo de dato no coincide
// != desigualdad debil
// !== desigualdad estricta
// > mayor
// < menor
// >= mayor o igual
// <= menor o igual



// Operadores matematicos
let numero1 = 1
let numero2 = 2
// + suma
let resultado = numero1 + numero2
console.log(resultado)
// - resta
resultado = numero1 - numero2
console.log(resultado)
// * multiplicacion
resultado = numero1 * numero2
console.log(resultado)
// / división
resultado = numero1 / numero2
console.log(resultado)
// % resto 
resultado = numero1 % numero2
console.log(resultado)
// ** potencia
resultado = numero1 ** numero2
console.log(resultado)


console.log(Math.sqrt(121)) //raiz
// Cubo de operaciones:
let elevado = 2 ** 3;
let a = 5;
console.log(Math.pow(2,a))

// Operadores Logicos
// && and Y
let a1 =  true && true;     // t && t devuelve true
let a2 =  true && false;    // t && f devuelve false
let a3 = false && true;     // f && t devuelve false
let a4 = false && (3 == 4); // f && f devuelve false
let a5 = 'Cat' && 'Dog';    // t && t devuelve Dog
let a6 = false && 'Cat';    // f && t devuelve false
let a7 = 'Cat' && false;    // t && f devuelve false

// || or Ó
let o1 =  true || true;     // t || t devuelve true
let o2 = false || true;     // f || t devuelve true
let o3 =  true || false;    // t || f devuelve true
let o4 = false || (3 == 4); // f || f devuelve false
let o5 = 'Cat' || 'Dog';    // t || t devuelve Cat
let o6 = false || 'Cat';    // f || t devuelve Cat
let o7 = 'Cat' || false;    // t || f devuelve Cat

// Operador de concatenación
// + 
let nombre = "Esteban"
let apellido = "Piazza"
console.log(nombre+apellido)