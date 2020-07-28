import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="about"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
    >
      <h2>
        <i className="fa fa-id-card-o" aria-hidden="true"></i> Who is Jan?
      </h2>
      <p>
        I am a junior developer and have completed my education at Codaisseur. I
        seize my opportunities, look for options, see problems and think in
        solutions.
      </p>
      <p>
        I listen carefully to others and look at every possibility with
        satisfaction. I work goal-oriented, seek clarity to work effectively and
        efficiently and i am not afraid to use tools.
      </p>
      <p>
        Characteristics of me are: ambitious, inquisitive learning attitude,
        knowledge of people through experience, cooperation and independence.
      </p>
    </motion.section>
  );
}

export default About;
