import { React, useState } from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";
import "./App.css";

function App() {
  // let [out, setOut] = useState(false);

  // function handleClick() {
  //   setOut((prevOut) => !prevOut);
  // }

  // let thingsArray =['t1', 't2']
  // let parrafoItm = thingsArray.map(item => {
  //   return(
  //     <p key={item} >{item}</p>
  //   )
  // })

let [thingsArray, setThingsArray] = useState(['t1', 't2'])

let arrayMap = thingsArray.map(item => {
  return(
    <p key={item} >{item}</p>
  )
})

  return (
    <div className="App">
      <Header />
      <Meme />
      {/* <h1>{out ? "yes" : "no"}</h1>
      <button onClick={handleClick}>click me</button> */}
      <div>{arrayMap}</div>
    </div>
  );
}

export default App; 
