import { React, useState } from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";
import memeFace from "./images/Troll Face.png";
import startEmpty from "./images/icon/star-regular.svg";
import startSolid from "./images/icon/star-solid.svg";

import "./App.css";

function App() {
  //   // let [out, setOut] = useState(false);

  //   // function handleClick() {
  //   //   setOut((prevOut) => !prevOut);
  //   // }

  //   // let thingsArray =['t1', 't2']
  //   // let parrafoItm = thingsArray.map(item => {
  //   //   return(
  //   //     <p key={item} >{item}</p>
  //   //   )
  //   // })

  //   // const [itemArray, setItemArray] = useState(['I1'])

  //   // let parraforItem = itemArray.map((item) => {
  //   //   return(
  //   //     <p key={item} >{item}</p>
  //   //   )
  //   // })

  //   // function addItem() {
  //   //   setItemArray((prevItemArray) => [...prevItemArray, `I${prevItemArray.length + 1}`])
  //   // }

  //   return (

  // <div>lol</div>

  //     // <div className="App">
  //     //   <Header />
  //     //   <Meme />
  //     //   {/* <h1>{out ? "yes" : "no"}</h1>
  //     //   <button onClick={handleClick}>click me</button> */}
  //     //   {/* <button onClick={addItem} > Add item</button> */}
  //     //   {/* <div>{parraforItem}</div> */}
  //     // </div>
  //   );
  const [contact, setContact] = useState({
    firstName: "Leo",
    lastName: "Pineda",
    phone: "69",
    email: "lol@example.com",
    isFavorite: false,
  });

  const { firstName, lastName, phone, email, isFavorite } = contact;

  // startEmpty
  // startSolid

  
  let icon = (contact.isFavorite ? startSolid : startEmpty);

  function toggleFavorite() {
    
  }
 

  return (
    <main>
      <article className="card">
        <img src={memeFace} className="card--image" />
        <div className="card--info">
          <img src={icon} className="card--favorite" onClick={toggleFavorite} />
          <h2 className="card--name">
            {firstName} {lastName}
          </h2>
          <p className="card--contact">{phone}</p>
          <p className="card--contact">{email}</p>
        </div>
      </article>
    </main>
  );
}

export default App;
