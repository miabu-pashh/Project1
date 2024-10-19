import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Taxonomy from "./components/Taxonomy";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Content from "./components/Content";
import TitleHeader from "./components/TitleHeader";

function App() {
  return (
    <Router>
      <div className="App">
        <TitleHeader />
        <div className="main-layout">
          <Header />
          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/content" element={<Content />} />
              <Route path="/taxonomy" element={<Taxonomy />} />
              <Route path="/team" element={<Team />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
