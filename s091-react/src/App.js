import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

const Greeting = _ => {
  return (
    <h2>Hola mundo</h2>
  );
}

const Greeting1 = (props) => {
  let name = props.name;
  return (
    <h2>Hola {name}</h2>
  );
}

const Greeting2 = ({name, city}) => {
  return(
    <h2>Hola {name}. Saludos desde {city}</h2>
  );
}


function App() {
  let valor = new Date().toLocaleDateString();
  return (
    <div className="App">        
      <header className="App-header">
        <Greeting />
        <Greeting1 name="Carlos" />
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
      </header>
    </div>
  );
}

export default App;
