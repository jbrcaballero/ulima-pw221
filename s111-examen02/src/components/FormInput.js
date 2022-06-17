import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';
const FormInput = ({ type, label }) => {
  return(
  <div className='row m-3'>
    <label className='col-sm-4 col-form-label'>{label}</label>
    <div className='col-sm-8'>
    <input type={type} className='form-control' />
    </div>
  </div>
  );
}
export default FormInput;