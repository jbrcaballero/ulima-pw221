import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
const TaskList = ({ tableStyle }) => {  
  const[taskList, setTaskList] = useState([]);
  const styleList = {Dark: 'table table-dark', Light: 'table'}
  const loadTasks = async () => {        
    const response = await fetch('http://localhost:5000/tasks');
    //Para llamado remoto comentar la línea anterior u descomentar la siguiente:
    //const response = await fetch('https://task-node-api-rest.herokuapp.com/tasks');
    const data = await response.json();
    setTaskList(data);
  }
  useEffect(_ => {loadTasks();}, []);
  return (
    <div className='row m-3'>
    <table className={styleList[tableStyle]}>
      <thead>
      <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Indicador Terminada</th>
        <th>ID Proyecto</th>        
      </tr>
      </thead>   
      <tbody>
      {
        taskList.map((task) => (
          <tr key={task.id}>
            <td>{task.id}</td>
            <td>{task.name}</td>
            <td>{task.done ? 'Sí' : 'No'}</td>
            <td>{task.projectId}</td>
          </tr>
        ))
      }
      </tbody>
           
    </table>
    </div>
  );
}

export default TaskList;