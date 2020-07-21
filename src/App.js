import React from "react";
import Header from "./components/Header.jsx";
import Intro from "./components/Intro.jsx";
import Portfolio from "./components/Portfolio.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Portfolio />
      <About />
      <Contact />
      <h2>About me.</h2>
      <p>
        I am a junior developer and completed my education at Codaisseur. I
        seize opportunities, look at options, solve problems and think in
        solutions.
      </p>
      <p>
        I listen carefully to others and make the impossible possible. I work
        goal-oriented, seek clarity to work effectively and efficiently and am
        not afraid to use tools.
      </p>
      <p>
        Characteristics of me are ambition, an inquisitive learning attitude,
        knowledge of people through experience, cooperation and independence.
      </p>
      <p>Hobby's - Contact.</p>
    </div>
  );
}

export default App;
