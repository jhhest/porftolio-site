import React from "react";
import Logos from "../../tech-logo/logos";
import Milestone from "./Milestone";
import { motion } from "framer-motion";

const loader = false;
const Portfolio = ({ loading }) => {
  return (
    <section id="skills">
      <motion.h2
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
      >
        <i className="fa fa-graduation-cap" aria-hidden="true"></i> Experience
        and Skills
      </motion.h2>
      {loading ? (
        <section id="timeline">
          <ul>
            <Milestone loading={true} />
            <Milestone loading={true} />
            <Milestone loading={true} />
          </ul>
        </section>
      ) : (
        <section id="timeline">
          <ul>
            <Milestone
              date={new Date(2020, 3, 1)}
              title="Codaisseur
            bootcamp"
              description="Intensive 3 month coding bootcamp in amsterdam. Around 500 hours of coding. Basically no life, just study."
              UsedTechnologies={[
                Logos.react.svg,
                Logos.redux.svg,
                Logos.javaScript.svg,
                Logos.html.svg,
                Logos.css.svg,
                Logos.database.svg,
                Logos.ubuntu.svg,
                Logos.git.svg,
                Logos.netlify.svg,
                Logos.docker.svg,
                Logos.node.svg,
                Logos.nodemon.svg,
                Logos.npm.svg,
                Logos.postgreSQL.svg,
                Logos.sequelize.svg,
                Logos.vscode.svg,
              ]}
            />
            <Milestone
              date={new Date(2020, 4, 1)}
              title="freeCodeCamp - Responsive Webdesign Certficate"
              description="300 Hours of coursework. Topics that were covered are html5, Basic CSS, applied visual design, applied accessibility, responsive webdesign principles, Flexbox, Grid and 5 webdesign Projects. "
              UsedTechnologies={[Logos.html.svg, Logos.css.svg]}
            />
            <Milestone
              date={new Date(2020, 5, 1)}
              title={"JavaScript Algorithms and Data Structures Certfication"}
              description="300 Hours of coursework. Topics that are covered are basic JavaScript, EcmaScript6, Regular Expressions, Debugging, Basic Data Structures, Basic Algorithm Scripting, Object Oriented Programming, Functional Programming, Intermediate Algorithm Scripting and 5 projects. "
              UsedTechnologies={[
                Logos.javaScript.svg,
                Logos.html.svg,
                Logos.css.svg,
              ]}
            />
            <Milestone
              date={new Date(2020, 6, 1)}
              title="My own portfolio website!"
              description="I made my own website. I made use of React, javascript, HTML/CSS, Framer motion and scalable vector art. I designed my logo In adobe Illustrator."
              UsedTechnologies={[
                Logos.react.svg,
                Logos.framerMotion.svg,
                Logos.git.svg,
                Logos.vscode.svg,
                Logos.html.svg,
                Logos.css.svg,
              ]}
            />
            <Milestone
              date={new Date(2020, 7, 1)}
              title="freeCodeCamp Front-end Libraries Certification"
              description="300 Hours of coursework. Consists out of 5 project and several assignements working on Bootstrap, Jquery, Sass, React and Redux. "
              UsedTechnologies={[
                Logos.react.svg,
                Logos.sass.svg,
                Logos.redux.svg,
                Logos.javaScript.svg,
                Logos.jquery.svg,
                Logos.bootstrap.svg,
                Logos.css.svg,
                Logos.html.svg,
              ]}
            />
          </ul>
        </section>
      )}
    </section>
  );
};

export default Portfolio;
