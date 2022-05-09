import { React, useState } from "react";
import memeData from "./memeData";

// atylesheet
import "../stylesheet/Meme.css";

export default function Meme() {
  const [img, setImg] = useState("");

  function generateUrl() {
    const memesArray = memeData.data.memes;
    let randomNumber = Math.floor(Math.random() * memesArray.length);
    let imgUrl = memesArray[randomNumber].url;
    setImg(imgUrl);
  }

  return (
    <main className="meme__container">
      <div className="form">
        <input className="meme__firstInput" type="text" />
        <input className="meme__secondInput" type="text" />
        <button className="meme__button" onClick={generateUrl}>
          Get a new meme 1 😆
        </button>
      </div>
      <div className="meme__img-container">
        <img className="meme__img" src={img} alt="" />
      </div>
    </main>
  );
}
