import React from "react";
import "./Intro.scss";

import Typed from "react-typed";
import Particles from "react-particles-js";
import { GitHub, Instagram, LinkedIn } from "@material-ui/icons";

import BG from "../../video-bg.mp4";
import AD from "../../AD.jpg";

const Intro = () => {
  return (
    <div class="intro" id="intro">
      <Particles
        params={{
          particles: {
            number: {
              value: 50,
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
                color: "#f9ab00",
              },
            },
          },
        }}
      />
      <div class="main-intro">
        <img
          classname="ad"
          src={AD}
          alt="ad"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "75px",
            border: "3px solid orange",
          }}
        />
        <h1 class="ad-name">ankit dhawan</h1>
        <Typed
          class="typed-text"
          style={{ fontSize: "20px", color: "#fff" }}
          strings={[
            "React Native",
            "Web Development",
            "Android Development",
            "Unity Game Development",
            "UI/UX",
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
                "https://www.linkedin.com/in/ankit-dhawan-17b552161/",
                "_blank"
              )
            }
          />
          <GitHub
            style={{ fontSize: "35px", margin: "10px", cursor: "pointer" }}
            onClick={() =>
              window.open("https://github.com/ad-dhawan", "_blank")
            }
          />
          <Instagram
            style={{ fontSize: "35px", margin: "10px", cursor: "pointer" }}
            onClick={() =>
              window.open("https://www.instagram.com/dhawan.exe/", "_blank")
            }
          />
        </div>
        <div
          class="resume"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1pu6bN14FOSgaPZ7Pv3TM1B0JlPzjFKaK/view?usp=sharing",
              "_blank"
            )
          }
        >
          <h3>RESUME</h3>
        </div>
      </div>
      <video
        class="video-bg"
        autoPlay
        loop
        muted
        style={{ opacity: "0.2", width: "100%", zIndex: 1 }}
      >
        <source src={BG} type="video/mp4" />
      </video>
    </div>
  );
};

export default Intro;
