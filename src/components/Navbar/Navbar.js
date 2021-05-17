import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav class="navbar">
        <div class={click ? "nav-container active" : "nav-container"}>
          <NavLink exact to="/" class="nav-logo">
            AD
          </NavLink>

          <ul class={click ? "nav-menu active" : "nav-menu"}>
            <li class="nav-item">
              <NavLink
                exact
                to="/"
                activeClass="active"
                class="nav-links"
                onClick={handleClick}
              >
                Intro
              </NavLink>
            </li>

            <li class="nav-item">
              <NavLink
                to="/portfolio"
                activeClass="active"
                class="nav-links"
                onClick={handleClick}
              >
                Portfolio
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                to="/projects"
                activeClass="active"
                class="nav-links"
                onClick={handleClick}
              >
                Projects
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                to="/contact"
                activeClass="active"
                class="nav-links"
                onClick={handleClick}
              >
                Contact
              </NavLink>
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
