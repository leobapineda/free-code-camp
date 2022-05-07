import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Wallpaper from "./components/wallpaper";
import Card from "./components/Card";
import Cat from "./components/Cat";

function App() {
  return (
    <div className="main-container">
      {/* <Navbar />
        <Wallpaper />
        <Card /> */}
      <Cat
        img="https://via.placeholder.com/300x200"
        name="Mr cat"
        phone="33-29-31-45-09"
        email="lolol@gmail.com"
        icon1="https://via.placeholder.com/20x20"
      />

      <Cat
        img="https://via.placeholder.com/300x200"
        name="Ms cat"
        phone="33-45-31-84-09"
        email="jaja@gmail.com"
        icon1="https://via.placeholder.com/20x20"
      />

      <Cat
        img="https://via.placeholder.com/300x200"
        name="Mr catling"
        phone="67-99-231-45-09"
        email="lol@gmail.com"
        icon1="https://via.placeholder.com/20x20"
      />

      <Cat
        img="https://via.placeholder.com/300x200"
        name="Dog"
        phone="33-29-31-45-09"
        email="nada@gmail.com"
        icon1="https://via.placeholder.com/20x20"
      />
    </div>
  );
}

export default App;
