import './App.css';
import Boton from './componenetes/Boton';
import Pantalla from './componenetes/Pantalla';
import BottonClear from './componenetes/BotonClear';
import { useState } from 'react';
import { evaluate, round } from 'mathjs'
import FreecodecampLogo from './componenetes/FreecodecampLogo';
function App() {

  let [inputValue, setInput] = useState('');
  const agregarInput = (value) => {
    let isNegativeNumber;
    if(inputValue < 0) {
      isNegativeNumber = true
      inputValue = inputValue * (-1)
    }
    let lastDigit = (inputValue).toString().charAt(inputValue.length-1)
    
    if(inputValue === '' && (value === '+' ||  value === '*' || value === '/' || value === '.')) {
      return
    }
    else if ((lastDigit === '+' || lastDigit === '-'|| lastDigit === '*' || lastDigit === '/' || lastDigit === '.') && (value === '+' || value === '-'|| value === '*' || value === '/' || value === '.')) {
        return
      }

      if(isNegativeNumber) {
        inputValue = inputValue * (-1)
        isNegativeNumber = false
      }
      setInput(inputValue + value)
    }

  let calcularResultado = () => {
    if(inputValue === '') return
    setInput(round(evaluate(inputValue), 4))
  };

  return (
    <div className='App'>
      <FreecodecampLogo />
      <div className='contenedor-calculadora'>

      <Pantalla 
      input = {inputValue} />

        <div className='fila' >
          {/* <Boton manejarClick = {agregarInput} >1</Boton> */}
          <Boton manejarClick = {agregarInput} >1</Boton>
          <Boton manejarClick = {agregarInput} >2</Boton>
          <Boton manejarClick = {agregarInput} >3</Boton>
          <Boton manejarClick = {agregarInput} >+</Boton>
        </div>
        <div className='fila' >
          <Boton manejarClick = {agregarInput} >4</Boton>
          <Boton manejarClick = {agregarInput} >5</Boton>
          <Boton manejarClick = {agregarInput} >6</Boton>
          <Boton manejarClick = {agregarInput} >-</Boton>  
        </div>
        <div className='fila' >
          <Boton manejarClick = {agregarInput} >7</Boton>
          <Boton manejarClick = {agregarInput} >8</Boton>
          <Boton manejarClick = {agregarInput} >9</Boton>
          <Boton manejarClick = {agregarInput} >*</Boton>
        </div>
        <div className='fila' >
          <Boton manejarClick = {calcularResultado} >=</Boton>
          <Boton manejarClick = {agregarInput} >0</Boton>
          <Boton manejarClick = {agregarInput} >.</Boton>
          <Boton manejarClick = {agregarInput} >/</Boton>
        </div>
        <div className='fila' >
        <BottonClear manejarClear = {() => {setInput('')}} > Clear </BottonClear>
        </div>
        <div></div>
      </div>
    </div>
  );
}
 
export default App;