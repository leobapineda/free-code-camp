import { React, useState } from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";
import "./App.css";

function App() {
  let [out, setOut] = useState(false);

  function handleClick() {
    setOut((prevOut) => !prevOut);
  }

  return (
    <div className="App">
      <Header />
      <Meme />
      <h1>{out ? "yes" : "no"}</h1>
      <button onClick={handleClick}>click me</button>
    </div>
  );
}

export default App; 
