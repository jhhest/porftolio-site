import React from "react";
import reactLogo from "../../src/tech-logo/reactjs.svg";
import cssLogo from "../../src/tech-logo/css.svg";
import htmlLogo from "../../src/tech-logo/html.svg";
import ubuntuLogo from "../../src/tech-logo/ubuntu.svg";
import dockerLogo from "../../src/tech-logo/docker.svg";
import gitLogo from "../../src/tech-logo/git.svg";
import javascriptLogo from "../../src/tech-logo/js_official.svg";
import netlifyLogo from "../../src/tech-logo/netlify.svg";
import nodeLogo from "../../src/tech-logo/node.svg";
import npmLogo from "../../src/tech-logo/npm.svg";
import postgreSQLLogo from "../../src/tech-logo/postgreSQL.svg";
import Milestone from "./progress/Milestone";
const Portfolio = () => {
  return (
    <section id="skills">
      <h2>
        <i class="fa fa-graduation-cap" aria-hidden="true"></i> Experience and
        Skills
      </h2>
      <section id="timeline">
        <ul>
          <li>
            <div>
              <h3>
                <i class="fa fa-calendar-o" aria-hidden="true"></i> 01-01-2020{" "}
                <i class="fa fa-chevron-right" aria-hidden="true"></i>{" "}
                <span class="codaisseur">{": { )"}</span> Codaisseur bootcamp{" "}
              </h3>
              <p>
                <span class="freeCodeCamp">
                  <i class="fa fa-info " aria-hidden="true"></i>
                </span>{" "}
                Intensive 3 month coding bootcamp in amsterdam. Over 40 hours a
                week coding. Basically no live, just study.
              </p>
              <h3>
                <i class="fa fa-certificate" aria-hidden="true"></i> Used
                Technologies
              </h3>
              <section class="usedTechnologies">
                <img class="logo" src={reactLogo} alt="" />
                <img class="logo" src={javascriptLogo} alt="" />
                <img class="logo" src={htmlLogo} alt="" />
                <img class="logo" src={cssLogo} alt="" />
                <img class="logo" src={netlifyLogo} alt="" />
                <img class="logo" src={ubuntuLogo} alt="" />
                <img class="logo" src={dockerLogo} alt="" />
                <img class="logo" src={gitLogo} alt="" />
                <img class="logo" src={nodeLogo} alt="" />
                <img class="logo" src={npmLogo} alt="" />
                <img class="logo" src={postgreSQLLogo} alt="" />
              </section>
            </div>
          </li>

          <li>
            <div>
              <h3>
                <i class="fa fa-calendar-o" aria-hidden="true"></i> 01-01-2020{" "}
                <i class="fa fa-chevron-right" aria-hidden="true"></i>{" "}
                <i class="fa fa-free-code-camp" aria-hidden="true"></i>{" "}
                freeCodeCamp - Responsive Webdesign Certficate{" "}
              </h3>
              <p>
                <i class="fa fa-info" aria-hidden="true"></i> Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. Doloribus sunt id
                corporis ut eos nisi aspernatur eaque vitae ipsam iusto.
              </p>
              <section class="usedTechnologies">
                <img class="logo" src={htmlLogo} alt="" />
                <img class="logo" src={cssLogo} alt="" />
              </section>
            </div>
          </li>
          <li>
            <div>
              <h3>
                <i class="fa fa-calendar-o" aria-hidden="true"></i> 01-01-2020{" "}
                <i class="fa fa-chevron-right" aria-hidden="true"></i>{" "}
                <i class="fa fa-free-code-camp" aria-hidden="true"></i>{" "}
                Certficate - JavaScript Algrorithms and Data Structures{" "}
              </h3>
              <p>
                <i class="fa fa-info" aria-hidden="true"></i> Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. Doloribus sunt id
                corporis ut eos nisi aspernatur eaque vitae ipsam iusto.
              </p>
              <section class="usedTechnologies">
                <img class="logo" src={htmlLogo} alt="" />
                <img class="logo" src={cssLogo} alt="" />
                <img class="logo" src={javascriptLogo} alt="" />
              </section>
            </div>
          </li>
          <Milestone
            title="freeCodeCamp Front-end certificate"
            description="300 Hours of coursework. Projects working on bootstrap, sass, lorem10"
          />
        </ul>
      </section>
    </section>
  );
};

export default Portfolio;
