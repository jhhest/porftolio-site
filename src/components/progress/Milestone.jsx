import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ReactComponent as HtmlLogo } from "../../tech-logo/html.svg";
import { ReactComponent as CssLogo } from "../../tech-logo/css.svg";
import { ReactComponent as LoadingPlaceholder } from "../../images/loading.svg";

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

  return loading ? (
    <AnimatePresence>
      <motion.li
        initial={{
          opacity: 0,
          scale: 0.25,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        exit={{ opacity: 0, scale: 0 }}
      >
        <div>
          <LoadingPlaceholder id="loadingPlaceholder" />
        </div>
      </motion.li>
    </AnimatePresence>
  ) : (
    <AnimatePresence>
      <motion.li
        initial={{
          opacity: 0,
          scale: 0.25,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        exit={{ opacity: 0, scale: 0 }}
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
            Technologies{" "}
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </h3>

          <section className="usedTechnologies">
            {returnLogos(UsedTechnologies)}
          </section>
        </div>
      </motion.li>
    </AnimatePresence>
  );
};

export default Milestone;

// <li
// initial={{
//   opacity: 0,
//   scale: 0.25,
// }}
// animate={{
//   opacity: 1,
//   scale: 1,
// }}
// >
// {loading ? (
//   <div id="loadingPlaceholder">
//     <LoadingPlaceholder />
//   </div>
// ) : (
// <div>
//   <h3>
//     <i className="fa fa-calendar-o" aria-hidden="true"></i>{" "}
//     {`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} `}
//     <i className="fa fa-chevron-right" aria-hidden="true"></i> {title}
//   </h3>
//   <p>
//     <span className="freeCodeCamp">
//       <i className="fa fa-info " aria-hidden="true"></i>
//     </span>{" "}
//     {description}
//   </p>
//   <h3>
//     <i className="fa fa-certificate" aria-hidden="true"></i> Used
//     Technologies{" "}
//     <i className="fa fa-chevron-right" aria-hidden="true"></i>
//   </h3>

//   <section className="usedTechnologies">
//     {returnLogos(UsedTechnologies)}
//   </section>
// </div>
// )}
// </li>
