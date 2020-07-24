import React from "react";
import Header from "./components/Header.jsx";
import Intro from "./components/Intro.jsx";
import Portfolio from "./components/Portfolio.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";


function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
}

export default App;
