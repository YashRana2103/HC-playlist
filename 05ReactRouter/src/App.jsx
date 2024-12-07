import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Home />
        <About />
        <Contact />
        <Footer />
      </Router>
    </>
  );
}

export default App;
