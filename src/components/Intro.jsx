import React from "react";
import profilePhoto from "../images/profile-photo.jpg";

function Intro() {
  return (
    <section id="intro">
      <img
        src={profilePhoto}
        alt="Jan van Hest, the author of the website."
      />
      <h1>Welcome! I am Jan van Hest</h1>
      <h2>A strong and independ developer with a learning mindset.</h2>
    </section>
  );
}

export default Intro;
