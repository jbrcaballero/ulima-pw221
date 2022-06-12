//Para manejar estado utilizamos el hook "useState"

//Realizamos la importacion para poder llamar a useState directamente
import { useState } from 'react';

/*
Importacion para utilizar Bootstrap.
Antes debe ejecutarse el siguiente comando desde la consola:
  npm install bootstrap
*/
import 'bootstrap/dist/css/bootstrap.css'

/*
Definimos nuestro componente de React. Debemos definir cómo representaremos
el estado del componente. Dado que solamente nos interesa la cantidad de clicks
que ha realizado el usuario, nuestro estado estara representado por dicha cantidad
(sera un valor numerico).
*/

const ClickCounter = _ => {
  //useState es una funcion que recibe nuestro estado inicial como parámetro
  const [clickCount, setClicks] = useState(500);

  /*
  En el desarrollo del componente, cada vez que quiera mostrar la cantidad de
  clics realizados utilizaré la variable "clickCount"; asimismo, cada vez que
  quiera actualizar ese valor de clics realizaré el llamado a "setClicks" con el
  nuevo valor del estado.
  */

  /*
  Cada vez que se presione el botón se incrementará la cantidad de clicks se 
  llamará a esta función. Como se observa, llamamos a "setClicks" para incrementar
  en uno el valor.
  */
  function incrementClicks(){
    setClicks(clickCount + 1);
  }

  /*
  De forma alternativa, podemos hacer la definición utilizando notación flecha:
    const incrementClicks = _ => setClicks(clickCount + 1);
  */

  /*
  Nuestro componente mostrará la cantidad de clicks, representado por la variable
  "clickCount" y utilizará la función "incrementClicks" para el manejo del evento
  click del botón. Muy importante tomar en cuenta que lo que debe ir en el atributo
  "onClick" debe ser una función.
  */
  return (
    <div className="container">
      <h3>Contador de clics</h3>
      <input type="text" value={clickCount} disabled></input>
      {/*
        Utilizamos clases de bootstrap para el botón (previamente instalado con npm)
        "incrementarClicks" se llamará en cada evento click.
      */}
      <button className="btn-success" onClick={incrementClicks}>Clic!</button>
    </div>
  );
}
export default ClickCounter;