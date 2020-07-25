import React from "react";
import profilePhoto from "../images/profile-photo.jpg";

function Intro() {
  return (
    <section id="intro">
      <div id="intro-image">
        <img
          src={profilePhoto}
          alt="Jan van Hest, the author of the website."
        />
        <h1>Welcome! </h1>
        <h1>I am Jan van Hest</h1>
      </div>
      <div id="intro-text">
        <h2>
          <i class="fa fa-info-circle" aria-hidden="true"></i> A strong and
          independend developer with a learning mindset.
        </h2>
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
      </div>
    </section>
  );
}

export default Intro;
