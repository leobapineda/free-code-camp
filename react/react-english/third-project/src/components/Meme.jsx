import { React, useState } from "react";
import memeData from "./memeData";

// atylesheet
import "../stylesheet/Meme.css";

export default function Meme() {
  function getNewImg() {
    const dataArray = memeData.data.memes;
    let randomIndex = Math.floor(Math.random() * dataArray.length);
    let dataLink = memeData.data.memes[randomIndex].url;
    console.log(dataLink);
    console.log(randomIndex);
  }

  return (
    <main className="meme__container">
      <div className="form">
        <input className="meme__firstInput" type="text" />
        <input className="meme__secondInput" type="text" />
        <button className="meme__button" onClick={getNewImg}>
          Get a new meme 😆
        </button>
      </div>
      <div className="meme__img-container">
        <img
          className="meme__img"
          src="https://i.imgflip.com/30b1gx.jpg"
          alt=""
        />
      </div>
    </main>
  );
}
