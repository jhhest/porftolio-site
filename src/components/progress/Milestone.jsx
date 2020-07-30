import React from "react";
import { motion } from "framer-motion";
import { ReactComponent as HtmlLogo } from "../../tech-logo/html.svg";
import { ReactComponent as CssLogo } from "../../tech-logo/css.svg";

const Milestone = ({
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quia ex, pariatur ea delectus asperiores?",
  title = "DefaultTitle",
  UsedTechnologies = [<HtmlLogo />, <CssLogo />],
  date = new Date(1, 1, 1900),
  loading = false,
}) => {
  const returnLogos = (logos) =>
    logos.map((technologie, index) => (
      <i key={`date-${date}-${index}`}>{technologie}</i>
    ));

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
          <i className="fa fa-calendar-o" aria-hidden="true"></i>{" "}
          {`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} `}
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
};

export default Milestone;
