console.log("Hola mundo")
console.log(document.body)

// 3 metodos para acceder a los nodos de HTML
// ID
// ClassName
// TagName
let parrafoPuro = document.getElementById("parrafoPrincipal")
let parrafoContenido = document.getElementById("parrafoPrincipal").innerText
let parrafoHTML = document.getElementById("parrafoPrincipal").innerHTML

console.log(parrafoPuro)
console.log(parrafoContenido)
console.log(parrafoHTML)

function pedirNombre (){
    let nombre = prompt("ingrese su nombre")
    return nombre

}
let nombreUsuario = pedirNombre()
/**********************/
//genera un ARRAY
let paises = document.getElementsByClassName("paises");

console.log(paises)
console.log(paises[0].innerText)
console.log(paises[1].innerHTML)
paises[0].style.color="red"

/************************/

let todosLosDivs = document.getElementsByTagName("div")

console.log(todosLosDivs)
console.log(todosLosDivs[0].innerHTML)
console.log(todosLosDivs[0].innerText)


/***********************/
let tituloPrincipal = document.getElementById("tituloPrincipal")
console.log(tituloPrincipal)
tituloPrincipal.innerText = "Hola Esteban"

/***********************/

let contenedorPrincipal = document.getElementById("contenedorPrincipal")

contenedorPrincipal.innerHTML = "<h1>Soy un h1</h1> Hola " + nombreUsuario

contenedorPrincipal.innerHTML =  `<p> Hola ${nombreUsuario} <p> asi se veria tu nombre en negrita <strong>${nombreUsuario}</strong> la suma de 1 + 1 es ${1+1}   ` //plantilla literal o template literal 
console.log(1+1)

/************************ */
//Agregar contenido nuevo a un tag
let parrafoNuevo = document.createElement("p")

parrafoNuevo.innerHTML = "<h3>Soy un h3 dentro de un parrafo nuevo</h3>"

document.body.append(parrafoNuevo);
/************************ */
//Elimino un elemento
parrafoNuevo.remove();

paises[0].remove()
/************************/
//Tomar valores de un formulario


console.log(nombreFormulario)

function mostrarDatos(){
    let nombreFormulario = document.getElementById("nombre").value
let edadFormulario = document.getElementById("edad").value
    console.log(nombreFormulario)
    console.log(edadFormulario)
}

/*
1) Crear un archivo js
2) Crear un archivo html
3) Enlazarlos
4) Crear una etiqueta con id
5) crear 2 o 3 etiquetas con class
6) Crear una etiqueta vacia
7) escribirle contenido a la etiqueta con id
8) Consologear el array resultante de el ClassNanem
9) Escribir dentro de un tag usando plantillas literales
10) Crear un elemento nuevo y agregarlo
11) Borrar un elemento */