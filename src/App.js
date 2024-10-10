import logo from "./logo.svg";
import "./App.css";

import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Taxonomy from "./components/Taxonomy";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <Content />
        <Taxonomy />
        <Team />
      </main>
      <Footer />
    </div>
  );
}

export default App;
