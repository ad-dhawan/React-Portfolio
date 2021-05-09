import React from "react";
import "./Topbar.css";
import { Mail } from '@material-ui/icons';

const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div class={"topbar " + (menuOpen && "active")}>
      <div class="wrapper">
        <div class="left">
          <a href="#intro" class="logo">
            AD
          </a>
              <div class="itemContainer">
                  <Mail style={{ fontSize: "18px", marginRight: "8px" }} />
                  <span style={{ fontSize: "15px", fontWeight: 300}}>ankit.ad.dhawan@gmail.com</span>
              </div>
        </div>
        <div class="right">
            <div class="hamburger" onClick={() => setMenuOpen(!menuOpen)} >
                <span class="line1" ></span>
                <span class="line2" ></span>
                <span class="line3" ></span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
