import 'bootstrap/dist/css/bootstrap.css'
//Named Export
import { ProjectInfo } from './components/ProjectInfo';
import ProjectType from './components/ProjectType';
import ButtonBar from './components/ButtonBar';
import TaskList from './components/TaskList';
function App() {
  return (
    <div className='container m-5'>
      <h1>Solución Examen 02</h1>
      <div className='container mt-4 p-4 border'>
        <div className='row'>
          <h4>Paso 1: Registrar proyecto</h4>
          <div className='col-md-6'>
            <ProjectInfo />    
          </div>
          <div className='col-md-6'>
            <ProjectType />
          </div>
          <div className='row'>
            <ButtonBar language='POR'/>
          </div>        
        </div>
        <div className='row mt-3'>
          <h4>Paso 2: Registrar las tareas del proyecto</h4>
          <h6 className='my-2'>Aquí algunos ejemplos</h6>
          <TaskList tableStyle='Light'/>
        </div>
      </div>
    </div>

  );
}

export default App;

