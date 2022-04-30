import React from "react";
import '../stylesheets/BotonClear.css'
const BottonClear = (props) => {
    return (
        <div 
        className="boton-clear" 
        onClick={props.manejarClear}>
            {props.children}
        </div>
    )
}

export default BottonClear