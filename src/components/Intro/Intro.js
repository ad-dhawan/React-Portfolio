import React from "react";
import "./Intro.scss";

import Typed from "react-typed";
import Particles from "react-particles-js";
import { GitHub, Instagram, LinkedIn } from "@material-ui/icons";

import BG from "../../video-bg.mp4";
import AD from "../../AD.jpg";
import Resume from '../../AnkitDhawanResume.pdf'

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
          src={AD}
          alt="ad"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "75px",
            border: "3px solid #69779b",
          }}
        />
        <h1 class="ad-name">ankit dhawan</h1>
        <Typed
          class="typed-text"
          style={{ fontSize: "20px", color: "#fff" }}
          strings={[
            "I am a Full Stack Developer",
            "I am a Mobile App Developer",
            "I am a Web Developer",
            "I am a UI/UX Designer",
            "I am a Tech Enthusiast"
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
        >
          <a href = {Resume} target = "_blank">Resume</a>
        </div>
      </div>
      <video
        class="video-bg"
        autoPlay
        loop
        muted
        style={{ opacity: "0.15", width: "100%", zIndex: 1 }}
      >
        <source src={BG} type="video/mp4" />
      </video>
    </div>
  );
};

export default Intro;
