import "./App.css";
import Header from "./components/Header";
import Meme from "./components/Meme";

function App() {
  const array = ["thing1", "thing2"];

  function createElement() {
    array.push(`thing${array.length + 1}`);
    console.log(array);
  }

  let arrayElement = array.map((item) => {
    return <p key={item}>{item}</p>;
  });

  return (
    <div className="App">
      <Header />
      <Meme />
      {arrayElement}
      <button onClick={createElement}>Clik me me</button>
    </div>
  );
}

export default App;
