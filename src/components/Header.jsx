import React, { Fragment } from "react";
import logo from "../logo-JanVanHest.svg";
import { motion } from "framer-motion";

function Header() {
  return (
    <Fragment>
      <header id="home">
        <motion.section
          id="logo-left"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            delay: 0.1,
          }}
        >
          <img id="logo" src={logo} alt="Logo for Jan van Hest" />
          <section id="logo-text">
            <p>Jan van Hest</p>
            <p>Webdeveloper</p>
          </section>
        </motion.section>
        <motion.nav
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 0.5,
          }}
        >
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
        </motion.nav>
      </header>
    </Fragment>
  );
}

export default Header;
