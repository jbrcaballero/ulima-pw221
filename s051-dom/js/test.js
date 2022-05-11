/*
  Se ejecuta luego de la carga de la ventana.
  En este caso permite asociar los eventos de los botones.
*/
window.onload = _ => {
  document.getElementById("btnTest").onclick = _ => {
    showResult(getPageData());
  }  
}

/*
  Retornar una cadena con informacion relevante sobre la pagina
  visitada
*/
const getPageData = _ => {
  let data = "";
  data += "Titulo: " + document.title + "\n";
  data += "URL: " + document.URL + "\n";
  data += "Referrer: " + document.referrer;
  return data;
}

//Funcion de prueba, muestra informacion llamando a "showResult"
const testFunction1 = _ =>{
  console.log("en test");
  showResult("Hola ULima");
}

//Recibe el contenido y lo muestra el textArea correspondiente
function showResult(result){
  document.getElementById("txtResult").value = result;
}
