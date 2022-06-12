/*
Para este ejercicio importamos useState (manejo de estado) y useEffect (manejo de "efectos secundarios").
El estado del componente estará representado por un objeto con los datos del proyecto que se mostrará.
"useEffect" nos permite realizar acciones o ejecutar "efectos secundarios" luego de que nuestro 
componente ya ha sido renderizado. Podemos utilizarlo, por ejemplo, para modificar elementos
del DOM (cambiar el titulo de la página, el color de fondo) o realizar acciones adicionales
como el llamado a un API (como en este ejemplo).
*/
import { useState, useEffect } from 'react';

//Definimos la función asociada a nuestro componente
const ProjectInfo = () => {
    //Utilizamos useState: el estado inicial será un objeto en blanco (sin datos)
    const[projectData, setProjectData] = useState({});
    /*
    Como altenativa a fetch.then (que vimos en la pare de Javascript) podemos utilizar una función
    asíncrona. Con un bloque de este tipo podemos utilizar el operador await para que el código
    espere el retorno de la inovcación a nuestra API de proyectos.
    
    Se pueden encontrar mayores detalles del uso de "async" aquí:
      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
    */
    const getResponse = async () => {
      console.log("Aqui en getResponse");
      //Utilizamos "await", con lo que ya no es necesario el uso del metodo "then"
      const response = await fetch(`https://task-node-api-rest.herokuapp.com/projects/1`);
      const data = await response.json();
      /*
      Una vez que hemos recibido los datos del proyecto, actualizamos el estado de nuestro 
      componente, lo que permitirá renderizar nuestro componente mostrando información del 
      proyecto.
      */
      setProjectData(data);
    }
    /*
    El bloque anterior solamente está definiendo una función, necesito especificar el momento
    en que se realizará el llamado. Para ello utilizamos useEffect.
    "useEffect" recibe una función como parámetro. Esta función se ejecutará cada vez que el
    componente se renderice. Para nuestro caso, realizaremos el llamado al API y actualizaremos
    los valores de ID y descripción.
    Obsérvese que, al obtener los datos haciendo uso del API, los valores de ID de proyecto y 
    descripción del proyecto se actualizarán por lo que el componente volverá a renderizarse y,
    por lo tanto, se volverá a llamar a useEffect. Esto a su vez provocará la actualización de
    valores y un nuevo llamado a useEffect. Como puede deducirse, el resultado final será un bucle
    infinito. Debemos tener mucho cuidado con estos efectos, ya que podrían causar problemas de 
    disponibilidad en nuestros servicios.
    Para poder evitar ello utilizamos el segundo parámetro de useEffect, el cual es un array de valores.
    Si estos valores no han sufrido cambios, no se llamará a la función asociada al primer parámetro.
    Como en nuestro caso solamente queremos invocar el llamado una vez, podemos enviar un array vacío.
    */ 
    useEffect(_ => {getResponse()}, []);
    return (
      <h4>El proyecto {projectData.id} tiene la siguiente descripción: {projectData.description}</h4>    
    );
  }

export default ProjectInfo;