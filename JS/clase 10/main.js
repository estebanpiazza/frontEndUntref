// Validar un formulario

/*
1) Que los campos no esten vacios
2) Caracteres raros
3) Tipo correcto
4) Limitar cantidad de caracteres
*/
document.getElementById("formulario").addEventListener('submit',validarFormulario)

function validarFormulario (evento){
    evento.preventDefault();
    let nombre = document.getElementById("nombre_usuario").value;
    let mail = document.getElementById("mail_usuario").value;
    let mensaje = document.getElementById("msg").value;
    if(nombre.length==0){
        alert("Tu nombre no puede estar vacio");
        return;
    }
    if(mail.length==0){
        alert("Tu mail no puede estar vacio");
        return; 
    }
    if(mensaje.length==0){
        alert("Tu mensaje no puede estar vacio");
        return; 
    }
    //+ todas las validaciones que necesitemos
    
    // this refiere a este objeto >> el formulario
    //submit es el comando que envia el formulario al backend (ejecuta "action")
    this.submit()
}


