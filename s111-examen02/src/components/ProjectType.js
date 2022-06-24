import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
const ProjectType = _ => {
  const technologies = {frontend: ['HTML', 'CSS', 'Javascript'], backend: ['Node', 'Express', 'MongoDB'],
                        fullstack: ['HTML', 'CSS', 'Node', 'Express']};  
  const styles = {selected: 'btn btn-success mx-2', notSelected: 'btn btn-light mx-2'};
  
  //Uso del hook useRef: Me permite vincular una variable a un elemento de la pagina (lo vincularemos al botón por defecto: FrontEnd)
  let defaultButton = useRef(null);
  
  //Almacenamos la lista de tecnologías como estado (que se mostrarán como checkboxes)
  const [technologyList, setTechnologyList] = useState(technologies.frontend);
  //Almacenamos también el botón que se encuentra presionado, a fin de poder modificar su estilo cuando presionemos otro
  const [selectedButton, setSelectedButton] = useState(null);

  const changeTechnologies = (event) => {
      //Cambio de la lista de tecnologías
      let clickedButton = event.target;
      let type = clickedButton.getAttribute('data-project-type');
      setTechnologyList(technologies[type]);

      //Cambio del estilo del botón
      clickedButton.className = styles.selected;
      if(selectedButton != null){
        selectedButton.className = styles.notSelected;
      }else{
        defaultButton.current.className = styles.notSelected;
      }
      setSelectedButton(clickedButton);
    }
  return (
    <React.Fragment>
      <div className='row m-3'>
        <h5>Tipo de Proyecto</h5>
        <div className='button-bar'>
          {/* El atributo ref nos permite vincularlo con la variable mediante el hook useRef */}
          <button ref={defaultButton} className={styles.selected} data-project-type='frontend' onClick={changeTechnologies}>FrontEnd</button>
          <button className={styles.notSelected} data-project-type='backend' onClick={changeTechnologies}>BackEnd</button>     
          <button className={styles.notSelected} data-project-type='fullstack' onClick={changeTechnologies}>Full Stack</button>     
        </div>
      </div>
      <div className='row m-3'>
        <h5>Tecnologías</h5>
        {
          technologyList.map(text => (
            <div className='form-check mt-3 mx-3' key={text}>
              <input className='form-check-input' type='checkbox' />
              <label className='form-check-label'>
                {text}
              </label>
            </div>
          ))
        }
      </div>
    </React.Fragment>          
  );
}

export default ProjectType;