// line simple
/*
*
*
*comentario multilinea*/

// input (ingreso de información) >>> proceso >>> salida de información

// Variable 
// Espacio en memoria donde se almacena un dato, con un nombre
const numeroPI = 3.14
//las varibles se crean con la siguiente estructura
// let nombre = valor
let rol;
let nombre = "Esteban"; //string
let apellido = "Piazza";
// cuando el valor es una cadena de caracteres(palabra), va entre comillas
let edad = 29; // number
let edadString = "29";
//cuando el valor es numerico no es necesario poner comillas, ni se deberia
console.log(edad+1);
console.log(edad-1);
console.log(nombre+"+"+apellido);

console.log(apellido+1);
console.log(edadString+1);
console.log(edadString-1);
console.log(apellido-1);
//NaN = Not a Number

// var nombre = "Esteban" > forma antigua de declarar variables
nombre = "Pepe";
console.log(nombre);
console.log(rol);

let verdadero = true; //boolean
let falso = false;
console.log(verdadero)
console.log(falso)

/*
*simbolo: + sumar/concatenar
*simbolo: - restar
*simbolo: * multiplicar
*simbolo: / dividir y mostrar cociente
*simbolo: % dividir y mostrar el resto
*/

console.log(15/2)
console.log(15%2)
/*******************************************/
console.log(typeof(verdadero))
/* alert("Bienvenid@ a la pagina") */ // es un alert
let nombreIngresado = prompt("ingrese su nombre")
console.log(typeof(nombreIngresado))
let edadIngresada= prompt("Ingrese su edad:")
/* alert("Hola "+nombreIngresado ) */
let edadEnNumero = parseInt(edadIngresada)
console.log(typeof(edadEnNumero));
/* alert ("Usted cumplira " + (edadEnNumero+1) +" en su proximo cumpleaños") */
console.warn("error 505")
console.log ( 10 > 11 ) //mayor
console.log ( 11 > 10 )
console.log(10<11)//menor
console.log(11<10)
console.log( 10 == 11) //igual
console.log (10 != 11 ) // distinto
console.log(10 <= 11)//true 
// >= 
// >= ó <=
// == igual
// !=

console.log(29 == "29") //comparacion debil, compara solo el valor
console.log(29 === "29")//comparacion estricta, compara el valor y el tipo de dato

