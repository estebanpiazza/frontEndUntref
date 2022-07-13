/*

6) Validar que mensaje tenga menos de 280 caracteres
*/

document
  .getElementById("contacto_usuario")
  .addEventListener("submit", validarFormulario);

function validarFormulario(evento) {
  evento.preventDefault();
  let nombre = document.getElementById("nombre").value;
  let mail = document.getElementById("mail").value;
  let telefono = document.getElementById("telefono").value;
  let mensaje = document.getElementById("mensaje").value;
  // nombre.length == 0  o nombre == ""
  if (nombre == "" || mail == "" || telefono == "" || mensaje == "") {
    alert("Completa todos los datos");
    return;
  }

  // valido el mail
  let posicionArroba = mail.indexOf("@");
  let posicionPunto = mail.lastIndexOf(".");
  //validar que esten en el string
  if (posicionArroba != -1 && posicionPunto != -1) {
    alert("ingresa email valido");
    return;
    
  } else if (posicionArroba > posicionPunto) {
    alert("ingresa email valido");
    return
    
  }
  
  //valido el telefono
  if(!(isNaN(telefono))){
    if(!(telefono.length>=8 && telefono.length<=13)){
        alert("ingrese telefono valido")
        return
    }
  }
  //valdio el mensaje
  if(!(mensaje.length>=0 && mensaje.length<=260)){
    alert("Su mensaje debe ser menor a 260 caracteres")
    return
}
}


