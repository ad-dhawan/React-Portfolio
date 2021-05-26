import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../Assets/logo.png"

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav class="navbar">
        <div class="nav-container">
          <Link exact to="/" class="nav-logo">
            <img src={Logo} alt="logo" class="logo"/>
          </Link>

          <ul class={click ? "nav-menu active" : "nav-menu"}>
            <li class="nav-item">
              <Link
                exact
                to="/"
                activeClass="active"
                class="nav-links"
                onClick={handleClick}
              >
                Intro
              </Link>
            </li>

            <li class="nav-item">
              <Link
                exact
                to="/portfolio"
                activeClass="active"
                class="nav-links"
                onClick={handleClick}
              >
                Portfolio
              </Link>
            </li>
            <li class="nav-item">
              <Link
                exact
                to="/projects"
                activeClass="active"
                class="nav-links"
                onClick={handleClick}
              >
                Projects
              </Link>
            </li>
            {/* <li class="nav-item">
              <NavLink
                to="/contact"
                activeClass="active"
                class="nav-links"
                onClick={handleClick}
              >
                Contact
              </NavLink>
            </li> */}
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
