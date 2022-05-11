const main = _ => {
  buttonShow = document.getElementById("btnShow");
  buttonShow.addEventListener("click", showGrid);
}
window.addEventListener("load", main);

//Se ejecutara al presionar el boton
const showGrid = _ => {
  //Referencia al div principal (container)
  divGrid = document.getElementById("divGrid2");
  
  //Creamos un div que representara una fila (row)
  divRow1 = document.createElement("div");
  //Asignamos la clase que se utilizara (CSS)
  divRow1.setAttribute("class", "row mt-3");
  //Puedo asignarle el id tambien
  divRow1.setAttribute("id", "divRow1")
  //Agregamos el div creado como hijo del div principal
  divGrid.appendChild(divRow1);

  //Creamos el div que funcionara como columna
  divCol11 = document.createElement("div");
  divCol11.setAttribute("class", "col");
  //Lo agregamos a la fila
  divRow1.appendChild(divCol11);

  //Creamos el boton y lo agregamos al div columna
  button1 = document.createElement("button");
  button1.setAttribute("class", "btn btn-primary w-100");
  button1.innerText = "1";
  divCol11.appendChild(button1);

  //Repetimos el proceso para el resto de botones
  divCol12 = document.createElement("div");
  divCol12.setAttribute("class", "col");
  divRow1.appendChild(divCol12);

  button2 = document.createElement("button");
  button2.setAttribute("class", "btn btn-primary w-100");
  button2.innerText = "2";
  divCol12.appendChild(button2);

  divCol13 = document.createElement("div");
  divCol13.setAttribute("class", "col");
  divRow1.appendChild(divCol13);

  button3 = document.createElement("button");
  button3.setAttribute("class", "btn btn-primary w-100");
  button3.innerText = "3";
  divCol13.appendChild(button3);

}