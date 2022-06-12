/*
Para este caso manejamos 2 props: name y city. Para renderizar el componente
podremos utilizar un bloque como este:
    <Greeting2 name="Mariana" city="Tacna" />
Podemos aplicar "destructuring" de los props, a fin de trabajar con variables
independientes que manejen cada una de las propiedades con facilidad.
*/
const Greeting2 = ({name, city}) => {
    return(
      <h2>Hola {name}. Saludos desde {city}</h2>
    );
  }

export default Greeting2;