/*
La variable props representa el conjunto de propiedades (datos) que pasamos a nuestro
componente al momento de crearlo: son de solo lectura y nos servirán para
mostrar al componente segun ciertos parametros.

Para poderlo mostrar colocamos un elemento con el nombre y especificamos
los "props":

    <Greeting1 name="Juan Perez" />
*/
const Greeting1 = (props) => {
    //Si queremos acceder a un "prop" especifico trabajamos con el operador punto
    let name = props.name;
    return (
      <h2>Hola {name}</h2>
    );
  }

/*
Agregamos esta linea para poder referenciar el componente desde archivos externos.
Tambien es posible especificarlo en la definicion de la funcion
  export default function Greeting1(props){
      ....
  }
*/
export default Greeting1;