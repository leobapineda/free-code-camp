import { React, useState } from "react";
import Header from "./Header";
import Body from "./Body";

export default function App(props) {
  const [user, setUser] = useState("Leo");

  return (
    <main>
      <Header name={user} />
      <Body name={user} />
    </main>
  );
}
