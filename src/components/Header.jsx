import React, { Fragment } from "react";
import logo from "../logo-JanVanHest.svg";

function Header() {
  return (
    <Fragment>
      <header id="home">
        <section id="logo-left">
          <img id="logo" src={logo} alt="Logo for Jan van Hest" />
          <section id="logo-text">
            <p>Jan van Hest</p>
            <p>Webdeveloper</p>
          </section>
        </section>
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
}

export default Header;
