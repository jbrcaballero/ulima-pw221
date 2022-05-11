/*
  Funcion que se llamara luego de la carga de la pagina
  Permite asociar las funciones respectivas a los eventos de los botones
*/
const main = _ => {
  buttonAdd = document.getElementById("btnAdd");
  butonMultiply = document.getElementById("btnMultiply");
  buttonClean = document.getElementById("btnClean");
  
  buttonAdd.addEventListener("click", getResult);
  butonMultiply.addEventListener("click", getResult);
}
//Alternativa a "document.load
window.addEventListener("load", main);

/*
  Funcion que procesa todos los datos de entrada del formulario y realiza
  el llamado a las funciones que realizan el calculo
*/
const getResult = event =>{
  let operation = getOperation(event);
  let operators = getOperators();
  let result = compute(operation, operators);
  showAnswer(result);
}


//Permite obtener la operacion realizada (Usa el texto del boton)
const getOperation = event => {
  let target = event.target
  return target.innerText;
}

//Retorna un array con los operadores (segun lo ingresado en pantalla)
const getOperators = _ => {
  value1 = parseInt(document.getElementById("txtValue1").value);
  value2 = parseInt(document.getElementById("txtValue2").value);
  return [value1, value2];
}


/*
  Recibe los parametros de la operacion y realiza el calculo.
  Observe que no tiene ninguna dependencia con los elementos de vista
  (no se procesan elementos HTML)
*/
const compute = (operation, operators) => {
  const ADD_OPERATION = "Sumar";
  const MULT_OPERATION = "Multiplicar";
  let result = 0;
  if(operation == ADD_OPERATION){
    result = operators[0] + operators[1];
  }else if(operation == MULT_OPERATION){
    result = operators[0] * operators[1];
  }
  return result;
}

//Permite mostrar la respuesta en el formato indicado (las mas recientes primero)
const showAnswer = result => {
  let prevText = document.getElementById("txtResult").innerHTML;
  document.getElementById("txtResult").innerHTML = result + "\n" + prevText;
}

