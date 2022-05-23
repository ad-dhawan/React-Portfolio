import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav class="navbar">
        <div class="nav-container">

          <ul class={click ? "nav-menu active" : "nav-menu"}>
            <li class="nav-item">
              <Link activeClass="active" to="/" spy={true} smooth={true}>
                Intro
              </Link>
            </li>

            <li class="nav-item">
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
              >
                Skills
              </Link>
            </li>

            <li class="nav-item">
              <Link
                activeClass="active"
                to="experience"
                spy={true}
                smooth={true}
              >
                Experience
              </Link>
            </li>
            <li class="nav-item">
              <Link activeClass="active" to="projects" spy={true} smooth={true}>
                Projects
              </Link>
            </li>
            <li class="nav-item">
              <Link activeClass="active" to="contact" spy={true} smooth={true}>
                Contact
              </Link>
            </li>
          </ul>
          <div class="nav-icon" onClick={handleClick}>
            <i class={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
