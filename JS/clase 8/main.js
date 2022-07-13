// Selectores
let titularPrincipal = document.querySelector("#titularPrincipal").innerText;
//let titularPrincipal = document.getElementById("titularPrincipal")
console.log(titularPrincipal);
let parrafoGenerico = document.querySelector(".parrafoGenerico").innerText;
console.log(parrafoGenerico);
//let parrafoGenerico = document.getElementsByClassName("parrafoGenerico")
let imagenRelleno = document.querySelector("img");
console.log(imagenRelleno);
//let imagenRelleno = document.getElementsByTagName("img")
let todosLosParrafos = document.querySelectorAll("p"); //array
console.log(todosLosParrafos);
console.log(todosLosParrafos[1].innerText);

//EVENTOS (events)
//event handler(manejador de eventos)
// event listener (escuchador de eventos)

// Forma 1: (Lado Luminoso)
//llamo al boton (o al ejecutador)
let botonPrincipal = document.querySelector("#botonPrincipal");

//creo la función que voy a ejecutar
function advertir() {
  alert("Te dije que no me hagas clic");
}
function doble() {
  let inputNumero = parseInt(document.querySelector("#numero").value);
  alert(inputNumero * 2);
}

// elemento.addEventListener("evento",funcion)
//asocio el evento (clic), con el elemento (el boton), con la accion ("advertir")
botonPrincipal.addEventListener("mouseout", advertir);

//Forma 2:  (lado luminoso)
let botonSecundario = document.querySelector("#segundoBoton");
//elemento.evento = function
botonSecundario.onclick = () => doble();

//Forma 3 : (lado oscuro)
function saludosLionel() {
  alert("esto es una mala practica");
}

//Eventos mas comunes
//Mouse
//Teclado
//Change
//Input
//Submit
//otros

//Mouse :
/*
click = cuando se hace clic sobre el elemento
mousedown/mouseup : oprime/suelta el mouse sobre el elemnto
mouseover/mouseout: el mouse pasa por arriba / el mouse SALE del elemento
mousemove: cuando se mueve el mouse
*/

//Eventos del teclado
/*keydown : cuando se presiona la tecla
keyup: cuando se suelta la tecla */

//Evento de cambio
/* onchange : cuando algo cambia, ejecuta la funcion */

//Evento input
/* input : cuando se tipea sobre un campo se ejecuta la funcion */

//Evento submit
/* exclusivo para formularios, que es el que va a ejecutar cuando el usuario cliquee el boton de enviar */
/* function cargaCompleta(){
    alert("Se termino de cargar la pagina")
}
window.onload(cargaCompleta()) */

/* Descomposición del problema: 
1) Capturar los 3 datos ✓✓
2) Detectar que dato me falta (if) ✓✓
    a) tengo cateto 1 y cateto 2 ✓✓
    b) tengo cateto 1 e hipotenusa ✓✓
    c) tengo cateto 2 e hipotenusa ✓✓
3) Hacer la operacion ✓✓
4) Devolver el resultado ✓✓
*/

function calcularPitagoras() {
  // 1) Capturo los 3 valores que se usan
  let cateto1 = parseFloat(document.querySelector("#cat1").value);
  let cateto2 = parseFloat(document.querySelector("#cat2").value);
  let hipotenusa = parseFloat(document.querySelector("#hipotenusa").value);

  //2) Detecto el dato que me falta
  if (isNaN(cateto1) && isNaN(cateto2) && isNaN(hipotenusa)) {
    alert("Ingresa valores, si no no puedo calcular pitagoras, papanata");
  } else if (!isNaN(cateto1) && !isNaN(cateto2) && isNaN(hipotenusa)) {
    // a) tengo cateto 1 y cateto 2 ✓✓
    let resultado = Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2)); //srqt square root (raiz cuadrada)
    document.querySelector("#hipotenusa").value = resultado.toFixed(2);
  } else if (!isNaN(cateto1) && isNaN(cateto2) && !isNaN(hipotenusa)) {
    // b) tengo cateto 1 e hipotenusa✓✓
    let resultado = Math.sqrt(Math.pow(hipotenusa, 2) - Math.pow(cateto1, 2));
    document.querySelector("#cat2").value = resultado.toFixed(2);
  } else if (isNaN(cateto1) && !isNaN(cateto2) && !isNaN(hipotenusa)) {
    // c) tengo cateto 2 e hipotenusa✓✓
    let resultado = Math.sqrt(Math.pow(hipotenusa, 2) - Math.pow(cateto2, 2));
    document.querySelector("#cat1").value = resultado.toFixed(2);
  } else {
    alert("Error en el programa, revisa los datos ingresados");
  }
}

botonPitagoras = document.querySelector("#botonPitagoras");
botonPitagoras.addEventListener("click", calcularPitagoras);
