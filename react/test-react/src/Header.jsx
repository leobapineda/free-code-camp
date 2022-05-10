import { React } from "react";

export default function Header({ name }) {
  return (
    <header>
      <p>Current user: {name}</p>
    </header>
  );
}
