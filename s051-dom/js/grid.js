const main = _ => {
  let buttonShow = document.getElementById("btnShow");
  buttonShow.addEventListener("click", showGrid);
}
window.addEventListener("load", main);

const addRow = container => {
  //Creamos un div que representara una fila (row)
  let divRow = document.createElement("div");
  //Asignamos la clase que se utilizara (CSS)
  divRow.setAttribute("class", "row mt-3");
  //Agregamos el div creado como hijo del div contenedor
  container.appendChild(divRow);
  return divRow;
}

const addColumn = rowElement => {
  //Creamos el div que funcionara como columna
  let divCol = document.createElement("div");
  divCol.setAttribute("class", "col");
  //Lo agregamos a la fila
  rowElement.appendChild(divCol);
  return divCol; 
}

const addButton = (columnElement, buttonText) => {
  //Creamos el boton y lo agregamos al div columna
  let button = document.createElement("button");
  button.setAttribute("class", "btn btn-primary w-100");
  button.innerText = buttonText;
  columnElement.appendChild(button);
}


//Se ejecutara al presionar el boton
const showGrid = _ => {
  //Referencia al div principal (container)
  let container = document.getElementById("divGrid2");
  let numRows = parseInt(document.getElementById("txtRows").value);
  let numColumns = parseInt(document.getElementById("txtColumns").value);
  for(let i = 0; i < numRows; i++){
    //Agregamos una fila a la grilla
    let currentRow = addRow(container);
    for(let j = 0; j < numColumns; j++){
      //Agregamos una columna (con la referencia a la fila actual)
      let currentColumn = addColumn(currentRow);
      let buttonValue = (i * numColumns) + (j + 1);
      let newButton = addButton(currentColumn, buttonValue);
    }
  } 
}