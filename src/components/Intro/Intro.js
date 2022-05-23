import React from "react";
import "./Intro.scss";

import Typed from "react-typed";
import Particles from "react-particles-js";
import { GitHub, LinkedIn } from "@material-ui/icons";

import B from "../../B.png";
import Resume from "../../AnkitDhawanResume.pdf";

const Intro = () => {
  return (
    <div class="intro" id="intro">
      <Particles
        style={{ opacity: 0.4 }}
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            line_linked: {
              shadow: {
                enable: true,
                color: "#000",
                blur: 100,
              },
            },
            shape: {
              type: "triangle",
              stroke: {
                width: 6,
                color: "#69779b",
              },
            },
          },
        }}
      />

      <div class="main-intro">
        <img
          classname="ad"
          src={B}
          alt="ad"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "75px",
            border: "3px solid #69779b",
          }}
        />
        <h1 class="ad-name">bhumika chauhan</h1>
        <Typed
          class="typed-text"
          style={{ fontSize: "20px", color: "#fff" }}
          strings={[
            "I am a UI/UX Designer",
            "I am a React Native Developer",
          ]}
          typeSpeed={50}
          backSpeed={40}
          loop
        />
        <div style={{ zIndex: 2 }}>
          <LinkedIn
            style={{ fontSize: "35px", margin: "10px", cursor: "pointer" }}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/bhumika-chauhan-605385204",
                "_blank"
              )
            }
          />
          <GitHub
            style={{ fontSize: "35px", margin: "10px", cursor: "pointer" }}
            onClick={() =>
              window.open("https://github.com/bhumikachauhan04", "_blank")
            }
          />
        </div>
        <div class="resume">
          <a href={Resume} target="_blank">
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
