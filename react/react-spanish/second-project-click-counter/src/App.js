import freeCodeCampLogo from './imagenes/freeCodeCamp-logo.png'
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react'
import './App.css'

function App() {
  const [numClicks, setNumClicks] = useState(0)
  const manejarClick = () => {
    setNumClicks(numClicks + 1)
  };

  const reiniciarContador = () => {
    setNumClicks(0)
  }

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor' >
        <img className='freecodecamp-logo' 
        src={freeCodeCampLogo}
        alt='Logo de freecodeCamp' />
      </div>

      <div className='contenedor-principal' >
        <Contador numClicks = {numClicks} />
        <Boton 
        texto = 'Click' 
        esBotonDeClick = {true}
        manejarClick = {manejarClick}
        />
        
        <Boton 
        texto = 'Resetear' 
        esBotonDeClick = {false}
        manejarClick = {reiniciarContador}
        />    
        </div>
    </div>
  );
}

export default App;

