import React from "react";
import profilePhoto from "../images/profile-photo.jpg";

function Intro() {
  return (
    <section id="intro">
      <div id="intro-text">
        <h2>
          <i className="fa fa-info-circle" aria-hidden="true"></i> A strong and
          independend developer with a learning mindset.
        </h2>
      </div>
      <div id="intro-image">
        <img
          src={profilePhoto}
          alt="Jan van Hest, the author of the website."
        />
        <h1>Welcome! </h1>
        <h1>I am Jan van Hest.</h1>
      </div>
    </section>
  );
}

export default Intro;
