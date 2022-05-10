import { React, useState } from "react";
import memeData from "./memeData";
// atylesheet
import "../stylesheet/Meme.css";

export default function Meme() {

  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/30b1gx.jpg',
  });

  const [allMemeImages, setallMemeImages] = useState(memeData);

  function getMemeImage() {
    
}

  return (
    <main className="meme__container">
      <div className="form">
        <input
          className="meme__firstInput"
          type="text"
          placeholder={''}
        />
        <input
          className="meme__secondInput"
          type="text"
          placeholder={''}
        />
        <button className="meme__button" onClick={getMemeImage}>
          Get a new meme 1 😆
        </button>
      </div>
      <div className="meme__img-container">
        <img className="meme__img" src={meme.randomImage} alt="meme img" />
      </div>
    </main>
  );
}
