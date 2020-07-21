import React, { Fragment } from "react";
import logo from "../logo-JanVanHest.svg";

function Header() {
  return (
    <Fragment>
      <header>
        <img class="logo" src={logo} alt="Logo for Jan van Hest" />
      </header>
      <nav>
        <ul>
          <li>Home</li>
          <li>About me</li>
          <li>Experience</li>
          <li>Contact</li>
        </ul>
      </nav>
    </Fragment>
  );
}

export default Header;
