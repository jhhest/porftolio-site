import React from "react";
import { motion } from "framer-motion";
import cssLogo from "../../../src/tech-logo/css.svg";
import dockerLogo from "../../../src/tech-logo/docker.svg";
import gitLogo from "../../../src/tech-logo/git.svg";
import htmlLogo from "../../../src/tech-logo/html.svg";
import javascriptLogo from "../../../src/tech-logo/js_official.svg";
import netlifyLogo from "../../../src/tech-logo/netlify.svg";
import nodeLogo from "../../../src/tech-logo/node.svg";
import npmLogo from "../../../src/tech-logo/npm.svg";
import postgreLogo from "../../../src/tech-logo/postgreSQL.svg";
import reactLogo from "../../../src/tech-logo/reactjs.svg";
import ubuntuLogo from "../../../src/tech-logo/ubuntu.svg";

// <img class="logo" src={reactLogo} alt="" />
// <img class="logo" src={javascriptLogo} alt="" />
// <img class="logo" src={htmlLogo} alt="" />
// <img class="logo" src={cssLogo} alt="" />
// <img class="logo" src={netlifyLogo} alt="" />
// <img class="logo" src={ubuntuLogo} alt="" />
// <img class="logo" src={dockerLogo} alt="" />
// <img class="logo" src={gitLogo} alt="" />
// <img class="logo" src={nodeLogo} alt="" />
// <img class="logo" src={npmLogo} alt="" />
// <img class="logo" src={postgreSQLLogo} alt="" />

function Milestone(props) {
  const { description, title } = props;
  const logoUrl = {};

  const returnTechnologieLogo = () => {
    return <img class="logo" src={reactLogo} alt="" />;
  };
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
          <i class="fa fa-calendar-o" aria-hidden="true"></i> 01-01-2020{" "}
          <i class="fa fa-chevron-right" aria-hidden="true"></i> {title}
        </h3>
        <p>
          <span class="freeCodeCamp">
            <i class="fa fa-info " aria-hidden="true"></i>
          </span>{" "}
          {description}
        </p>
        <h3>
          <i class="fa fa-certificate" aria-hidden="true"></i> Used Technologies
        </h3>
        <section class="usedTechnologies">{returnTechnologieLogo()}</section>
      </div>
    </motion.li>
  );
}

export default Milestone;
