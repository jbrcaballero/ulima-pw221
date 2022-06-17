import 'bootstrap/dist/css/bootstrap.css'
const ButtonBar = ({ language }) => {
    const labels = { 
        "ES":{
            save: "Guardar",
            cancel: "Cancelar"
        },
        "EN":{
            save: "Save",
            cancel: "Cancel"
        }
    };

    let localLabels = labels[language];
    return (
        <div className='m-4 row text-center'>
            <div className='button-bar'>
                <button className='btn btn-primary mx-2'>{localLabels.save}</button>
                <button className='btn btn-danger mx-2' >{localLabels.cancel}</button>        
            </div>
      </div>
    );
}

export default ButtonBar;