import React from "react";
import { motion } from "framer-motion";
import { ReactComponent as DeveloperProgrammingSVG } from "../images/programming.svg";

const Contact = () => {
  return (
    <section id="contact">
      <motion.section
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        id="contact-info"
      >
        <h2>
          <i className="fa fa-address-card-o" aria-hidden="true"></i> Contact
        </h2>
        <p>
          <i className="fa fa-coffee" aria-hidden="true"></i> Let's keep in
          touch! You are welcome for a cup of coffee or a nice conversation. You
          can contact me via social media, email or telephone. And I prefer just
          calling.
        </p>
        <p>
          <i className="fa fa-mobile" aria-hidden="true"></i>: 0642091421
        </p>
        <p>
          <i className="fa fa-envelope" aria-hidden="true"></i>:
          janvanhest@outlook.com
        </p>
        <p>
          <i className="fa fa-linkedin" aria-hidden="true"></i>:
          https://www.linkedin.com/in/jan-developer/
        </p>
        <p>
          <i className="fa fa-github" aria-hidden="true"></i>:
          https://github.com/jhhest
        </p>
      </motion.section>
      <DeveloperProgrammingSVG id="contact-image" />
    </section>
  );
};
export default Contact;
