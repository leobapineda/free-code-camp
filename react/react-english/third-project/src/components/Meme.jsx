import React from "react";
import "../stylesheet/Meme.css";
export default function Meme() {
  // atylesheet
  return (
    <main className="meme__container">
      <form action="">
        <div className="meme__input-container" >
        <input className="firstInput" type="text" />
        <input type="text" />
        </div>
        <div>
          <button>Get a new meme 😆</button>
        </div>
      </form>
    </main>
  );
}
