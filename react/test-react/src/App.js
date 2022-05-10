import React from "react"
import boxes from "./components/Boxes"
import './App.css'
import Box from "./components/Box"

export default function App({darkMode}) {



  const [box, setBox] = [boxes]

  

  const boxElements = box.map( ({id, on}) => (
    <Box 
    key={id}
    on = {on}
    id = {id}
    />
    )
  )
    


    return (
        <main >
            <h1>Boxes will go here</h1>
            {boxElements}
        </main>
    )
}

//es un array de objetos