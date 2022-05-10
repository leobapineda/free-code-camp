import { React, useState } from "react";
import memeData from "./memeData";
// atylesheet
import "../stylesheet/Meme.css";

export default function Meme() {
  const [allMemeImages, setallMemeImages] = useState(memeData);

  const memesArrayInit = allMemeImages.data.memes;
  let randomNumberInit = Math.floor(Math.random() * memesArrayInit.length);
  let memeInit = memesArrayInit[randomNumberInit];

  const [meme, setMeme] = useState({
    topText: memeInit.id,
    bottomText: memeInit.name,
    randomImg: memeInit.url,
  });

  const memesArray = allMemeImages.data.memes;
  let randomNumber = Math.floor(Math.random() * memesArray.length);

  const [generateMeme, setGenerateMeme] = useState(memeData.data.memes[randomNumber]);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    let randomNumber = Math.floor(Math.random() * memesArray.length);
    let memeNew = memesArray[randomNumber];

    setGenerateMeme((prevMeme) => {
      return { ...prevMeme, id: memeNew.id, name: memeNew.name, url: memeNew.url };
    });

    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        topText: memeNew.id,
        bottomText: memeNew.name,
        randomImg: memeNew.url,
      };
    });
  }

  return (
    <main className="meme__container">
      <div className="form">
        <input
          className="meme__firstInput"
          type="text"
          placeholder={meme.topText}
        />
        <input
          className="meme__secondInput"
          type="text"
          placeholder={meme.bottomText}
        />
        <button className="meme__button" onClick={getMemeImage}>
          Get a new meme 1 😆
        </button>
      </div>
      <div className="meme__img-container">
        <img className="meme__img" src={meme.randomImg} alt="meme img" />
      </div>
    </main>
  );
}
