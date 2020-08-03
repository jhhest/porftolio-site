import React from "react";
import { ReactComponent as BootstrapLogo } from "../tech-logo/bootstrap.svg";
import { ReactComponent as CssLogo } from "../tech-logo/css.svg";
import { ReactComponent as DatabaseLogo } from "../tech-logo/database.svg";
import { ReactComponent as DockerLogo } from "../tech-logo/docker.svg";
import { ReactComponent as FramerMotionLogo } from "../tech-logo/framer-motion.svg";
import { ReactComponent as GitLogo } from "../tech-logo/git.svg";
import { ReactComponent as HtmlLogo } from "../tech-logo/html.svg";
import { ReactComponent as JqueryLogo } from "../tech-logo/jquery.svg";
import { ReactComponent as JavaScriptLogo } from "../tech-logo/js_official.svg";
import { ReactComponent as NetlifyLogo } from "../tech-logo/netlify.svg";
import { ReactComponent as NodeLogo } from "../tech-logo/node.svg";
import { ReactComponent as NodemonLogo } from "../tech-logo/nodemon.svg";
import { ReactComponent as NpmLogo } from "../tech-logo/npm.svg";
import { ReactComponent as PostgreSQLLogo } from "../tech-logo/postgreSQL.svg";
import { ReactComponent as ReactLogo } from "../tech-logo/reactjs.svg";
import { ReactComponent as ReduxLogo } from "../tech-logo/redux.svg";
import { ReactComponent as SassLogo } from "../tech-logo/sass.svg";
import { ReactComponent as SequelizeLogo } from "../tech-logo/sequelize.svg";
import { ReactComponent as UbuntuLogo } from "../tech-logo/ubuntu.svg";
import { ReactComponent as VscodeLogo } from "../tech-logo/vscode.svg";

const Logos = {
  bootstrap: {
    url: "https://getbootstrap.com/",
    svg: <BootstrapLogo />,
    description: "The most popular HTML, CSS, and JS library in the world.",
  },
  css: {
    url: "https://www.w3.org/Style/CSS/Overview.en.html",
    svg: <CssLogo />,
    description:
      "Cascading Style Sheets (CSS) is a simple mechanism for adding style (e.g., fonts, colors, spacing) to Web documents.",
  },
  database: {
    url: "https://en.wikipedia.org/wiki/Database",
    svg: <DatabaseLogo />,
    description:
      "A database is an organized collection of data, generally stored and accessed electronically from a computer system.",
  },
  docker: {
    url: "https://www.docker.com/",
    svg: <DockerLogo />,
    description:
      "Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.",
  },
  framerMotion: {
    url: "https://www.framer.com/motion/",
    svg: <FramerMotionLogo />,
    description:
      "A production-ready motion library for React. Production-ready declarative animations, Animations that work like magic, Complex events and gestures and More.",
  },
  git: {
    url: "https://git-scm.com/",
    svg: <GitLogo />,
    description:
      "Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.",
  },
  html: {
    url: "https://whatwg.org/",
    svg: <HtmlLogo />,
    description: "HTML is the standard markup language for Web pages.",
  },
  jquery: {
    url: "https://jquery.com/",
    svg: <JqueryLogo />,
    description:
      "jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax.",
  },
  javaScript: {
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
    svg: <JavaScriptLogo />,
    description:
      "JavaScript is a scripting or programming language that allows you to implement complex features on web pages",
  },
  netlify: {
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
    svg: <NetlifyLogo />,
    description: "All-in-one platform for automating modern web projects. ",
  },
  node: {
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
    svg: <NodeLogo />,
    description:
      "Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser.",
  },
  nodemon: {
    url: "https://nodemon.io/",
    svg: <NodemonLogo />,
    description:
      "Nodemon is a utility that will monitor for any changes in your source and automatically restart your server. ",
  },
  npm: {
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
    svg: <NpmLogo />,
    description:
      "npm is a package manager for the JavaScript programming language. ",
  },
  postgreSQL: {
    url: "https://www.postgresql.org/",
    svg: <PostgreSQLLogo />,
    description:
      "PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance. ",
  },
  react: {
    url: "https://reactjs.org/",
    svg: <ReactLogo />,
    description:
      "React is an open-source JavaScript library for building user interfaces. ",
  },
  redux: {
    url: "https://redux.js.org/",
    svg: <ReduxLogo />,
    description:
      "Redux is an open-source JavaScript library for managing application state.",
  },
  sass: {
    url: "https://redux.js.org/",
    svg: <SassLogo />,
    description:
      "Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets.",
  },
  sequelize: {
    url: "https://sequelize.org/",
    svg: <SequelizeLogo />,
    description:
      "Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. ",
  },
  ubuntu: {
    url: "https://ubuntu.com/",
    svg: <UbuntuLogo />,
    description:
      "Ubuntu is an open source software operating system that runs from the desktop, to the cloud, to all your internet connected things. ",
  },
  vscode: {
    url: "https://ubuntu.com/",
    svg: <VscodeLogo />,
    description:
      "Visual Studio Code is a free source-code editor made by Microsoft for Windows, Linux and macOS. Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git. ",
  },
};

export default Logos;
