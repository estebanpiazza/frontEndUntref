/* function validarMail (){
    let bandera = false
    let bandera2 = false
    let mail = prompt("Ingrese su mail")
    // @ y .
    for (let i =0;i<mail.length;i++){
        if(mail[i] == "@" ){
            bandera = true
        }
        for (let i =0;i<mail.length;i++){
            if(mail[i] == "." ){
                bandera2 = true
            }
    
        }

    }
    if(bandera == true && bandera2 == true){
        alert("El mail es valido")
    }else{
        alert("El mail no es valido")
    }
}

validarMail() */
/* 

function validarContrasenia (){
    let contrasenia = prompt("Ingrese su contraseña")
    if (contrasenia.length < 8){
        alert ("Contraseña no valida, minimo 8 caracteres.")
    }else{
        let size = contrasenia.length -1
        if ( contrasenia.charAt(size)!="."){
            alert("La contraseña debe terminar en .")
        }
    }
}
 */
/* validarContrasenia() */


let string = "contraseña56"

function comparar() {
  for (let i = 0; i < string.length; i++) {
    if (Number(string[i])) {
      return console.log(string[i]);
    }
  }
  return alert("no tiene num")
}

comparar()