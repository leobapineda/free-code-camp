import { React, useState } from "react";
import memeData from "./memeData";

// atylesheet
import "../stylesheet/Meme.css";

export default function Meme() {

  let obj = useState(0)
  console.log(obj);
  const [num, setNum] = useState(0)

function sumCount() {
  setNum((prevNum)  => prevNum + 1)
}

function substractCount() {
  setNum((prevNum) => prevNum - 1)
}

  return (
    <main className="meme__container">
      <h1>{num}</h1>
      <div className="form">
        <input className="meme__firstInput" type="text" />
        <input className="meme__secondInput" type="text" />
        <button className="meme__button" onClick={sumCount}>
          Get a new meme 1😆
        </button>
        <button className="meme__button" onClick={substractCount}>
        Get a new meme 2😆

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
