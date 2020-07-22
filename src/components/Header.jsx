import React, { Fragment } from "react";
import logo from "../logo-JanVanHest.svg";

function Header() {
  return (
    <Fragment>
      <header>
        <section id="logo-left">
          <img id="logo" src={logo} alt="Logo for Jan van Hest" />
        </section>
        <section id="logo-text">
          <p>Jan van Hest</p>
          <p>Webdeveloper</p>
        </section>
        <nav>
          <ul>
            <li>Home</li>
            <li>About me</li>
            <li>Experience</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
}

export default Header;
