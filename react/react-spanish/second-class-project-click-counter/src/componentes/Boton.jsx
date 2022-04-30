import React from 'react'
import '../styles/Boton.css'

class Boton extends React.Component {
    render() {
        return (
            <div>
            <button className={ this.props.esBotonDeClick ? 'boton-click' : 'boton-reiniciar' } onClick = {this.props.manejarClick}>
            {this.props.texto}
        </button>
        </div>
        )
    }
}

// function Boton({ texto, esBotonDeClick, manejarClick }) {
//     return(
//         <div>
//             <button className={ esBotonDeClick ? 'boton-click' : 'boton-reiniciar' } onClick = {manejarClick}>
//             {texto}
//         </button>
//         </div>
//     )
// }

export default Boton

