//Funciones: notacion regular
function greet(){
  return "Hola mundo";
}

//Aqui un ejemplo con un parametro
function square(n){
  return n * n;
}

//Arrow Notation
const cube = x => {
  console.log("En funcion cube...");
  return x * x * x;
}

//Con arrow notation podemos especificar una funcion en una linea de forma sencilla
//Esta funcion retornara la suma de dos numeros dados como dato
const sum = (a, b) => a + b;


/*
  Dados los 3 lados de un triangulo a, b y c: Implemente una funcion
  que retorne una cadena con el tipo de triangulo: equilatero, isosceles
  o escaleno.
*/
const getTriangleType = (a, b, c) => {
  //Sintaxis similar a Java. Operadores logicos -> &&, ||
  if(a == b && a == c){
    return "Equilatero";
  }else if(a == b || a == c || b == c){
    return "Isosceles";
  }else{
    return "Escaleno";
  }
}

/*
  Implemente una funcion que reciba un entero n y retorne un array con la suma 
  de los numeros enteros entre 1 y n (inclusive). Muestre en consola la suma
  total.
*/
const getSum = n => {
  let sum = 0;
  //Definicion de array, similar a Python
  let values = [];
  for(let i = 1; i <= n; i++){
    //push permite agregar un nuevo elemento al array
    values.push(i);
    sum += i;
  }
  console.log("La suma es:", sum);
  return values;
}

/*
  Implemente una funcion que reciba un array y un valor a buscar.
  Debe retornar verdadero si el valor se encuentra en el array
  y falso en caso contrario.
*/
const find = (arr, x) => {
  //Primera forma: Con indices
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == x){
      return true;
    }
  }
  return false;
} 

const find2 = (arr, x) => {
  //Segunda forma: utilizando for..of
  for(let element of arr){
    //Se recorrera el array cada elemento se ira almacenando en "element"    
    if(element == x){
      return true;
    }
  }
  return false;
}

//Tambien podemos trabajar con matrices en Javascript
const showMatrix = _ =>{
  const values = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  for(let i = 0; i < values.length; i++){
    for(let j = 0; j < values[0].length; j++){
      console.log(i, j, values[i][j]);
    }
  }
  return true;
}

//Podemos trabajar con Objetos
//Ejemplo: {firstName: "Juan", lastName: "Perez", age: 22};

//Retorna el nombre completo del estudiante
const getFullName = student => student.firstName + " " + student.lastName;

//Retorne verdadero si el estudiante es mayor de edad o falso en caso contrario
const legalAge = student => student.age >= 18;

//Modifique el ejercicio anterior para considerar un texto de respuesta
const legalAge1 = student => student.age >= 18 ? "Mayor de edad" : "Menor de edad";



