import { React, useState } from "react";
import boxesData from "./components/Boxes";
import "./App.css";
import Box from "./components/Box";

export default function App({ darkMode }) {
  const [box, setBox] = useState(boxesData);

  const boxElements = box.map((boxItem) => {
    return <Box key={boxItem.id} on={boxItem.on} id={boxItem.id} />;
  });

  return (
    <main>
      <h1>Boxes will go here</h1>
      {boxElements}
    </main>
  );
}

//es un array de objetos
