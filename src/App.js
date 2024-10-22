import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Taxonomy from "./components/Taxonomy";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Content from "./components/Content";
import TitleHeader from "./components/TitleHeader";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <TitleHeader />
        <div className="page-container">
          <Header />
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/content" element={<Content />} />
              <Route path="/taxonomy" element={<Taxonomy />} />
              <Route path="/team" element={<Team />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
