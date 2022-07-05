// while
/* for ( let i = 0; i < 10; i++){
    console.log("Hola");
} */


let x = 0;
while (x < 10) {
    console.log("Hola");
    x += 1
}

contrasenia == "Leopoldo"
ingresoUsuario = prompt("Ingrese contraseña: ")
while (contrasenia != ingresoUsuario){
    ingresoUsuario = prompt("Ingrese contraseña: ")
}
console.log("Bienvenido al sistema")


/* Una planta que fabrica perfiles de hierro posee un lote de n piezas.
Confeccionar un programa que pida ingresar por teclado la cantidad de piezas a procesar y luego ingrese la longitud de cada perfil; sabiendo que la pieza cuya longitud esté comprendida en el rango de 1.20 y 1.30 son aptas. Imprimir por pantalla la cantidad de piezas aptas que hay en el lote.*/
/* let cantidadPiezas = parseInt(prompt("Ingrese cantidad de piezas a procesar: "));
let aptas = 0;
let j = 0;
while (j<cantidadPiezas){
let longitud = parseFloat(prompt("Ingrese longitud del perfil: "));
if(longitud>1.20 && longitud < 1.30){
aptas += 1;
}
j += 1;
}
alert ("La cantidad de piezas aptas es: " + aptas); */



//Desarrollar un programa que permita la carga de 10 valores por teclado y nos muestre posteriormente la suma de los valores ingresados y su promedio.
let total=0;
let ingreso=0;
let promedio = 0 ;
let k = 0;
while (k < 10){
    ingreso = parseInt(prompt("Ingrese numero: "));
    total = total + ingreso // variable acumuladora
    k = k + 1; // variable contadora
}
promedio = total / 10
console.log(total)
console.log(promedio)

let i = 0
do {
   i += 1;
   document.write(i);
} while (false);


/*Escribir un programa que solicite ingresar 10 notas */

let aprobados = 0;
let desaprobados = 0;
let repeticion = 0
let arrayAprobados = []
let arrayDesaprobados = []
while(repeticion < 10){
let notaIngresada = parseFloat(prompt("Ingrese nota: "))
if(desaprobados=desaprobados+1
    arrayDesaprobados.push(notaIngresada)
}else{
    console.log("Error en el ingreso de datos")
}
repeticion += 1
}
console.log("aprobaron: " + aprobados)
console.log(arrayAprobados);
console.log("desaprobaron: " + desaprobados)
console.log(arrayDesaprobados);notaIngresada >= 7 && notaIngresada<11 ){
    aprobados = aprobados + 1
    arrayAprobados.push(notaIngresada)
    // aprobados++
    //aprobados += 1
}else if (notaIngresada<7 && notaIngresada>0 ){
    



/****************************************/

/* En una empresa trabajan n empleados cuyos sueldos oscilan entre $100 y $500, realizar un programa que lea los sueldos que cobra cada empleado e informe cuántos empleados cobran entre $100 y $300 y cuántos cobran más de $300. Además el programa deberá informar el importe que gasta la empresa en sueldos al personal.
 */

