import React from 'react'
import '../styles/Boton.css'


function Boton({ texto, esBotonDeClick, manejarClick }) {
    return(
        <div>
            <button className={ esBotonDeClick ? 'boton-click' : 'boton-reiniciar' } onClick = {manejarClick}>
            {texto}
        </button>
        </div>
    )
}

export default Boton

