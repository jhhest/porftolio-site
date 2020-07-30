import React, { useState, useEffect } from "react";
import Hobbies from "../src/components/Hobbies.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Header from "./components/Header.jsx";
import Intro from "./components/Intro.jsx";
import Progress from "./components/progress/Progress.jsx";
import milestonesData from "./milestones.js";

const App = () => {
  const [milestones, setMilestones] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getMilestones();
  }, []);
  // Get Milestones
  const getMilestones = async () => {
    setLoading(true);
    const fetchData = () => {
      setTimeout(() => {
        setLoading(false);
        return milestonesData;
      }, 1000);
    };
    const response = await fetchData();
  };

  return (
    <div className="App" id="appFlexbox">
      <Header />
      <Intro />
      <Progress loading={loading} />
      <About />
      <Hobbies />
      <Contact />
    </div>
  );
};

export default App;
