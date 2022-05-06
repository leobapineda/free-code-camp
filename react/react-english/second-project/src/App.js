import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function Page() {
  return (
    <div className="main-container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Page;
