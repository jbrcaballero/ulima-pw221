import logo from './logo.svg';
import './App.css';

//Importaciones para utilizar los componentes que hemos creado
import Greeting1 from './components/Greeting1';
import Greeting2 from './components/Greeting2';
import ProjectInfo from './components/ProjectInfo';
import ClickCounter from './components/ClickCounter';

/*
  Para definir un componente de React solamente necesitamos una funcion
  que retorne un elemento JSX
*/
const Greeting = _ => {
  return (
    //Debe ser un solo elemento (o manejar un contenedor: div, React.Fragment)
    <h2>Hola mundo</h2>
  );
}

function App() {
  let valor = new Date().toLocaleDateString();
  return (
    <div className="App">        
      <header className="App-header">
        {/*Renderizado simple: componente en el mismo archivo*/}
        <Greeting />
        {/*Uso de props*/}
        <Greeting1 name="Carlos" />
        {/*Se trabaja con 2 props: name y city*/}
        <Greeting2 name="Alejandra" city="Chiclayo" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Primera aplicación con react: <code>src/App.js</code>. Hoy es {valor}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/*Contador de clics que hace uso de useState*/}
        <ClickCounter />
        {/*Muestra la información de proyetos haciendo uso de useState y useEffect*/}
        <ProjectInfo id="3" />
      </header>
    </div>
  );
}

export default App;
