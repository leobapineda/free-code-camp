import freecodecamplogo from '../imagenes/freeCodeCamp-logo.png'


function  FreecodecampLogo() {
    return (
        <div className='freecodecamp-logo-contenedor' >
             <img className='freecodecamp-logo' src={freecodecamplogo} alt='Logo de freecode camp' />
        </div>
    )
}

export default FreecodecampLogo 