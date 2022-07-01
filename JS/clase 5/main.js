//variable 
let casa = "Esteban"

// array - vector 

let edificio = ["Esteban","Lionel","Mathias"]

let profesor = ["Esteban", 29, true]
let edades = [11,12,13]

console.log(casa);
console.log(edificio);
console.log(edificio[0]);
console.log(edificio[1]);
console.log(edificio[2]);
console.log(edificio[3]);
console.log("--------------------------")
for (let i = 0; i < edificio.length ; i++){
    console.log(edificio[i])
}
console.log("--------------------------")
for ( let i = 0; i<edades.length;i++ ){
    console.log(edades[i]+1);
}
console.log(edades)
edades[0] = edades[0] + 1
console.log(edades[0]);

const ARRAY = [1,2,3,4]
ARRAY[0] = ARRAY[0] + 1
console.log(ARRAY) 


/* const nombre = "Esteban"
nombre = "Lionel" */

const CARRITO = []
// push - agregar un elemento
CARRITO.push("Lentes de sol")
CARRITO.push("Protector solar")

// pop - para eliminar elemento (el ultimo)
let ultimo = CARRITO.pop()

// unshift - agrega elementos al principio
CARRITO.unshift("Sombrilla")

// shift - eliminar el primer elemento
CARRITO.shift()

console.log(ultimo);
console.log(CARRITO);

const animales = ["perro","gato","tortuga"]

console.log(animales.includes("perro"));
console.log(animales.includes("jirafa"));

function encontrar (array,valor){
    for(let i = 0;i < array.length;i++ ){
        if(array[i]===valor){
            return true
        }
    }
    return false
}
console.log("-----------------------");
console.log(encontrar(animales,"perro"))
console.log(encontrar(animales,"jirafa"))

// OBJETOS LITERALES
// par clave : valor
let persona1 = {
    nombre: "Esteban",
    edad:29,
    profesor:true,
    categoria: "anteojos"
}

let persona2 = {
    nombre: "Lionel",
    edad:18,
    profesor:false,
}


console.log(persona1);
console.log(persona1.nombre);
console.log(persona2.nombre);

let usuarioNuevo = {
    mail:"asd@asd.com" ,
    contrasenia:"",
    nombre:"",
    apellido:"",
    pais:"",

}

console.log(persona1);
console.table(persona1)
console.table(ARRAY)

const PERSONAL = [persona1,persona2] 
console.table(PERSONAL);


// Create Read Update Delete
// Crear - Leer - Actualizar - Borrar 

const ARRAYDETODO = ["Esteban",29,persona1]
console.log(ARRAYDETODO);

/*
*1) Crear un array con 5 nombres
*2) Agregar mediante metodo un nombre al principio y un nombre al final
*3) Eliminarlos mediante metodo
*4) Usar un metodo que me permita unir los elementos de un array para * que queden escritos asi "Esteban - Lionel - Mathias - Fernando - * Enrique" (spoiler: existe un metodo, google it!)
*5) Crear dos objeto con 3 propiedades iguales pero valores distintos
*6) Asignarlos a un array
*7) hacer un console.table de ese array.
*/