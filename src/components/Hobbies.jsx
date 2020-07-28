import React from "react";
import { motion } from "framer-motion";
import { ReactComponent as HobbySVG } from "../images/biking_kc4f.svg";
function Hobbies() {
  return (
    <section id="hobbies">
      <motion.section
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
      >
        <h2>
          <i className="fa fa-gamepad" aria-hidden="true"></i> Hobby's
        </h2>
        <p>Diverse, characterized by technical and creative activities:</p>
        <ul className="hobbies">
          <li> Programming websites</li>
          <li>
            Work with graphics programs such as Gimp, Inkscape, Photoshop and
            illustrator
          </li>
          <li>Electronics and 3D-printers</li>
          <li>Digital photography</li>
          <li>Bicycles</li>
          <li>Nature</li>
        </ul>
      </motion.section>
        <HobbySVG id="hobbyimage"/>
    </section>
  );
}

export default Hobbies;
