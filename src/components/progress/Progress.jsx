import React from "react";
import { ReactComponent as UbuntuLogo } from "../../../src/tech-logo/ubuntu.svg";
import { ReactComponent as CssLogo } from "../../../src/tech-logo/css.svg";
import { ReactComponent as DockerLogo } from "../../../src/tech-logo/docker.svg";
import { ReactComponent as GitLogo } from "../../../src/tech-logo/git.svg";
import { ReactComponent as HtmlLogo } from "../../../src/tech-logo/html.svg";
import { ReactComponent as JavaScriptLogo } from "../../../src/tech-logo/js_official.svg";
import { ReactComponent as NetlifyLogo } from "../../../src/tech-logo/netlify.svg";
import { ReactComponent as NodeLogo } from "../../../src/tech-logo/node.svg";
import { ReactComponent as NpmLogo } from "../../../src/tech-logo/npm.svg";
import { ReactComponent as PostgreSQLLogo } from "../../../src/tech-logo/postgreSQL.svg";
import { ReactComponent as ReactLogo } from "../../../src/tech-logo/reactjs.svg";
import Milestone from "./Milestone";

const Portfolio = () => {
  return (
    <section id="skills">
      <h2>
        <i className="fa fa-graduation-cap" aria-hidden="true"></i> Experience
        and Skills
      </h2>
      <section id="timeline">
        <ul>
          <Milestone
            date={new Date(2020, 2, 1)}
            title="freeCodeCamp Front-end certificate"
            description="300 Hours of coursework. Projects working on bootstrap, sass, lorem10"
            UsedTechnologies={[<ReactLogo />, <UbuntuLogo />]}
          />
          <li>
            <div>
              <h3>
                <i className="fa fa-calendar-o" aria-hidden="true"></i>{" "}
                01-01-2020{" "}
                <i className="fa fa-chevron-right" aria-hidden="true"></i>{" "}
                <span className="codaisseur">{": { )"}</span> Codaisseur
                bootcamp{" "}
              </h3>
              <p>
                <span className="freeCodeCamp">
                  <i className="fa fa-info " aria-hidden="true"></i>
                </span>{" "}
                Intensive 3 month coding bootcamp in amsterdam. Over 40 hours a
                week coding. Basically no live, just study.
              </p>
              <h3>
                <i className="fa fa-certificate" aria-hidden="true"></i> Used
                Technologies
              </h3>
              <section className="usedTechnologies">
                <ReactLogo />
              </section>
            </div>
          </li>

          <li>
            <div>
              <h3>
                <i className="fa fa-calendar-o" aria-hidden="true"></i>{" "}
                01-01-2020{" "}
                <i className="fa fa-chevron-right" aria-hidden="true"></i>{" "}
                <i className="fa fa-free-code-camp" aria-hidden="true"></i>{" "}
                freeCodeCamp - Responsive Webdesign Certficate{" "}
              </h3>
              <p>
                <i className="fa fa-info" aria-hidden="true"></i> Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Doloribus sunt id
                corporis ut eos nisi aspernatur eaque vitae ipsam iusto.
              </p>
              <section className="usedTechnologies">
                <ReactLogo />
              </section>
            </div>
          </li>
          <li>
            <div>
              <h3>
                <i className="fa fa-calendar-o" aria-hidden="true"></i>{" "}
                01-01-2020{" "}
                <i className="fa fa-chevron-right" aria-hidden="true"></i>{" "}
                <i className="fa fa-free-code-camp" aria-hidden="true"></i>{" "}
                Certficate - JavaScript Algrorithms and Data Structures{" "}
              </h3>
              <p>
                <i className="fa fa-info" aria-hidden="true"></i> Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Doloribus sunt id
                corporis ut eos nisi aspernatur eaque vitae ipsam iusto.
              </p>
              <section className="usedTechnologies">
                <ReactLogo />
              </section>
            </div>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Portfolio;
