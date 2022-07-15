// 1) Variables - tipos de datos
//un espacio en memoria con un nombre
// let nombre = valor;
let apellido = "Piazza";
let edad = 29;
// string = "palabra"
// integer-float = enteros o con coma (decimales)
// boolean = true O false
// undefined = no esta definido el valor
// null = valor nulo o vacio
// objetos = objetos 

// 2) Operadores

// Matematicos
// Sumar y concatenar : + 
// numero + numero (suma) - string + string (concatena) - numero+string(concatena)
// Restar: -
// Dividir(cociente): /
// Dividir(resto): %
// Multiplicar *
// Potencia **

// Logicos
// Igualdad
// == igualdad debil (solo valor)
// "2" == 2 devuelve true
// === igualdad estrica (valor y tipo de dato)
// "2" === 2 devuelve false
// Desigualdad != debil y !== estricta ( no es igual (o es distinto))
// Mayor - menor - mayor o igual - menor o igual
// > - < - >= - <= 
// devuelven true o false
console.log(10<11)
// And y  Or (comparacion)
// &&  y  || 
// y   -   o
//          V    y  V = true
console.log(1<2 && 2<3)
//          V   o   V = true
console.log(1<2 || 2<3)
//          F    y  V = false
console.log(1>2 && 2<3)
//          F    o  V = true
console.log(1>2 || 2<3)

// 3) Funciones
// una función es una porcion de codigo reutilizable
function saludar(){
    console.log("Hola mundo")
}

//function nombre(parametro/s) {
    //operaciones
    // return
//}
function sumar(num1,num2){
    return num1+num2
    // let resultado = num1+num1
    // return resultado
}
sumar(1,2)
console.log( sumar(1,2) )
let resultadoSuma = sumar(1,2)
console.log(resultadoSuma)

// 4) Estructura if
let edad2 = 17;
function patova(numero){
    if(numero >= 18){
        return "Puede pasar"
    }else{
        return "No puede pasar"
    }
}

console.log(patova(edad2)) // No puede pasar
console.log(patova(edad)) // Puede pasar
console.log(patova(sumar(17,1))) //Puede pasar
console.log(patova(sumar(16,1))) // No puede pasar


// 5) Estructura while - do while
function acumular (){
    let x = 0
    let acumulador = 0;
    while (x !== -1){
       let valor = parseInt(prompt("ingresar valor"))
       acumulador = acumulador + valor;
       x = parseInt(prompt("Ingrese -1 para terminar, 0 para seguir"))
    }
    console.log(acumulador)
}

// Do while
let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i > 5);

console.log(result);

// 6) Estructura for
//for (variable; condición; variación){}
for(let i = 0; i < 10;i++){
    console.log(i)
}
for(let j = 0; j < apellido.length;j++ ){
    console.log(apellido[j])
}