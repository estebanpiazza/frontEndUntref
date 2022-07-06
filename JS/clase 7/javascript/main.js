// function "nombre" ("parametros"){ return "valor"}
function saludar(){ //aca esta declarada
    return ("Hola");
}

saludar(); //aca la estoy llamando 

console.log(saludar());

//Clean Code
function mostrarPorConsola(loQueVoyAMostrar){ //el parametro es el comodin
    console.log(loQueVoyAMostrar);
}

function sumar(a,b){
    return a + b;
}
sumar(1,2)

mostrarPorConsola(saludar())
mostrarPorConsola(sumar(1,2))


function like(cantidadDeLikes){
    return cantidadDeLikes += 1
}

