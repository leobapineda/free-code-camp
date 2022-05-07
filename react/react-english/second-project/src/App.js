import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Wallpaper from "./components/wallpaper";
import Card from "./components/Card";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <Wallpaper />
      <Card
        profileImg={1}
        starImg={"star"}
        rating={5.0}
        reviewCount={6}
        country={"USA"}
        tittle={"Life lessons with Katie"}
        price={123}
      />
    </div>
  );
}

export default App;
