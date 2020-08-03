import React from "react";
import profilePhoto from "../images/profile-photo.jpg";
import { motion } from "framer-motion";
function Intro() {
  return (
    <section id="intro">
      <motion.div
        id="intro-text"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          delay: 0.1,
        }}
      >
        <h2>
          <i className="fa fa-info-circle" aria-hidden="true"></i> A strong and
          independend developer with a learning mindset.
        </h2>
      </motion.div>
      <motion.div
        id="intro-image"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          delay: 0.1,
        }}
      >
        <img
          src={profilePhoto}
          alt="Jan van Hest, the author of the website."
        />
        <h1>Welcome! </h1>
        <h1>I am Jan van Hest.</h1>
      </motion.div>
    </section>
  );
}

export default Intro;
