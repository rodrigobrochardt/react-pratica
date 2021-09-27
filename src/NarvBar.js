import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";

const NarvBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-items">
        <Link
          activeClass="active"
          to="cover"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >Home</Link>
        <Link
          activeClass="active"
          to="aboutme"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >About Me</Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >Projects</Link>
      </div>
    </nav>
  );
};

export default NarvBar;
