import { React, useState } from "react";
import "./App.css";
import Counter from "./componenets/Counter";
import Button from "./componenets/Button";
import freecodecampLogo from "./img/freecodecamp-logo.png";

function App() {
  let [count, setCount] = useState(0);

  const addCount = () => {
    setCount((count) => count + 1);
  };

  const substractCount = () => {
    setCount((count) => count - 1);
  };

  const clearCount = () => {
    if (count === 0) return;
    setCount(0);
  };

  return (
    <div className="App">
      <header className="app-logo">
        <img src={freecodecampLogo} alt='freecodecamp logo'/>
      </header>
      <main className="app-main">
        <Counter count={count} />

        <Button esCickButton={true} counterChange={addCount} text="Add" />

        <Button
          esCickButton={true}
          counterChange={substractCount}
          text="Substract"
        />

        <Button esCickButton={false} counterChange={clearCount} text="Clear" />
      </main>
    </div>
  );
}

export default App;
