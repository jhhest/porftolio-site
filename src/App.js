import React from "react";
import Header from "./components/Header.jsx";
import Intro from "./components/Intro.jsx";
import Portfolio from "./components/Portfolio.jsx";
import About from "./components/About.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Portfolio />
      <About />
    </div>
  );
}

export default App;
