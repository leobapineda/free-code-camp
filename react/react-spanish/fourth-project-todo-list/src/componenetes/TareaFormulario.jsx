import React, { useState } from "react";
import '../stylesheet/TareaFormulario.css';
import { v4 as uuidv4} from 'uuid';

function TareaFormulario (props) {

    const [input, SetInput] = useState('')

    const manejarCambio = (e) => {
        SetInput(e.target.value)
    };
    
    const manejarEnvio = (e) => {
        e.preventDefault()

        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        };

        props.onSubmit(tareaNueva)
    };

    return (
        <form 
        className="tarea-forulario" 
        onSubmit={manejarEnvio}
        >
            <input 
                className='tarea-input'
                type='text'
                placeholder='Estribe una Tarea'
                name='texto'
                onChange={manejarCambio}
             />
             <button className="tarea-boton" >
                 Agrega Tarea
             </button>
        </form>
    )
}

export default TareaFormulario