const main = _ => {
  let buttonShow = document.getElementById("btnShow");
  buttonShow.addEventListener("click", showInfo);
}
window.addEventListener("load", main);

/*
  Muestra la informacion de la respuesta a la invocacion de la
  URL ingresada. La muestra como texto en el textArea
*/
const showInfo = _ => {
  let resultBox = document.getElementById("txtResult");
  let url = document.getElementById("txtUrl").value;
  displayJson(url);
  
}

const displayJson = url => {
  //Realizamos el request
  fetch(url)
    //Una vez que se obtenga la respuesta a la solicitud, se retorna como texto
    .then(response => response.text())  //Directamente: response.json()
    //Se puede encadenar un conjunto de llamados, esta funcion procesara el texto de respuesta
    .then(textData => {
      //Conversion cadena --> objeto JSON
      let jsonObject = JSON.parse(textData);
      console.log(jsonObject[0].name)
      //Conversion objeto JSON --> cadena (stringify)
      document.getElementById("txtResult").innerText = JSON.stringify(textData);
    });
}
