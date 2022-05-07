import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Wallpaper from "./components/wallpaper";
import Card from "./components/Card";
import Data from "./components/Data";

function App() {
  let  dataElement  = Data.map((element) => {
    // console.log(element);
    return (
      <Card
      title={element.title}
        id={element.id}
        description={element.description}
        price={element.price}
        coverImg={element.coverImg}
        rating = {element.stats.rating}
        reviewCount = {element.stats.reviewCount}
        location={element.location}
        openSpots={element.openSpots}
      />
    );
  });

  return (
    <div className="main-container">
      <Navbar />
      <Wallpaper />
      <div className="cards-container" >{dataElement}</div>
    </div>
  );
}

export default App;
