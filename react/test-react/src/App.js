import React from "react"
import boxes from "./components/Boxes"
import './App.css'

export default function App() {

  const [box, setBox] = [boxes]

  const boxElements = box.map( ({id, on}) => (
      <div className="box" key={id} ></div>
    )
  )
    


    return (
        <main>
            <h1>Boxes will go here</h1>
            {boxElements}
        </main>
    )
}

//es un array de objetos