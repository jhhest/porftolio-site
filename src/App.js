import React from "react";
import Hobbies from "../src/components/Hobbies.jsx";
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
      <Hobbies />
      <Contact />
    </div>
  );
}

export default App;
