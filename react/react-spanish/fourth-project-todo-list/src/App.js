import './App.css';
import freecodecampLogo from './imagenes/freeCodeCamp-logo.png';
import ListaDeTareas from './componenetes/ListaDeTareas';
function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src={freecodecampLogo}
          className='freecodecamp-logo' />
      </div>
      <div className='tareas-lista-principal' >
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App

//retos
  // guardar las tareas para que cuando el usuario regrese las pueda ver
  //en lugar de poner todo dentro de ListaDeTareas, poner las tareas y el formulario directamente dentro de App.js