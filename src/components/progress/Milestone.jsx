import React from "react";
import { motion } from "framer-motion";
import cssLogo from "../../tech-logo/css.svg";
import reactLogo from "../../tech-logo/reactjs.svg";
import dockerLogo from "../../tech-logo/docker.svg";
import gitLogo from "../../tech-logo/git.svg";
import htmlLogo from "../../tech-logo/html.svg";
import javascriptLogo from "../../tech-logo/js_official.svg";
import netlifyLogo from "../../tech-logo/netlify.svg";
import nodeLogo from "../../tech-logo/node.svg";
import npmLogo from "../../tech-logo/npm.svg";
import postgreSQLLogo from "../../tech-logo/postgreSQL.svg";
import ubuntuLogo from "../../tech-logo/ubuntu.svg";

function Milestone(props) {
  const { description, title, UsedTechnologies } = props;
  console.log(typeof reactLogo);
  const returnLogos = (logos) => logos.map((technologie) => technologie);
  return (
    <motion.li
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
    >
      <div>
        <h3>
          <i className="fa fa-calendar-o" aria-hidden="true"></i> 01-03-2020{" "}
          <i className="fa fa-chevron-right" aria-hidden="true"></i> {title}
        </h3>
        <p>
          <span className="freeCodeCamp">
            <i className="fa fa-info " aria-hidden="true"></i>
          </span>{" "}
          {description}
        </p>
        <h3>
          <i className="fa fa-certificate" aria-hidden="true"></i> Used
          Technologies
        </h3>

        <section className="usedTechnologies">
          {returnLogos(UsedTechnologies)}
        </section>
      </div>
    </motion.li>
  );
}

export default Milestone;
