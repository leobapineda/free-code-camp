import { React, useState } from 'react';
import './App.css'
import Counter from './componenets/Counter';
import Button from './componenets/Button';
import freecodecampLogo from './img/freecodecamp-logo.png'


function App() {


  return (
    <div className='App'>
      <header className='app-logo' >
        <img src={freecodecampLogo} /> 
      </header>
      <main className='app-main' >

        <Counter />

        <Button 
          esCickButton = {true}
          // counterChange = 
          text = 'Count'
        />

        <Button 
          esCickButton = {false}
          // counterChange = 
          text = 'Clear'
        />
      </main>
    </div>
  );
}

export default App;

