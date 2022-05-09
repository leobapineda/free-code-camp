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
  const [itemArray, setItemArray] = useState(['I1'])

  let parraforItem = itemArray.map((item) => {
    return(
      <p key={item} >{item}</p>
    )
  })

  function addItem() {
    setItemArray((prevItemArray) => [...prevItemArray, `I${prevItemArray.length + 1}`])
  }

  return (




    <div className="App">
      <Header />
      <Meme />
      {/* <h1>{out ? "yes" : "no"}</h1>
      <button onClick={handleClick}>click me</button> */}
      <button onClick={addItem} > Add item</button>
      <div>{parraforItem}</div>
    </div>
  );
}

export default App;
