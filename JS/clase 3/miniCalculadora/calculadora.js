let expresion = prompt("Ingrese operacion")

switch (expresion) {
  case "+":
    console.log("+")
    //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
    break;
  case "-":
  console.log("-")
    //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
    break;
  case "*":
  console.log("*")
    //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
    break;
  case "/":
  console.log("/")
    //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
    break;

  default:
    console.log("error")
    //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
    break;
}