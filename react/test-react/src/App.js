import React from "react";
import Header from "./Header";
import Body from "./Body";

export default function App({ name }) {
  

  return (
    <main>
      <Header 
      
      />
      <Body 
      userBody={name} 
      />
    </main>
  );
}
