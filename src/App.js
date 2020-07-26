import React from "react";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Header from "./components/Header.jsx";
import Intro from "./components/Intro.jsx";
import Progress from "./components/Progress.jsx";

function App() {
  return (
    <div className="App" id="appFlexbox">
      <Header />
      <Intro />
      <Progress />
      <About />
      <Contact />
    </div>
  );
}

export default App;
