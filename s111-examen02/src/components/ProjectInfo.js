import 'bootstrap/dist/css/bootstrap.css'
import FormImput from './FormInput';
//Otra forma para exportar: Named Exports (puedo tener mas de una)
export const ProjectInfo = _ => {
  return (  
    <div className='row'>
      <FormImput type='text' label='Nombre' />
      <FormImput type='date' label='Fecha Inicio' />
      <FormImput type='date' label='Fecha Fin' />
      <FormImput type='number' label='Prioridad' />
    </div>
  );
}
