import React from "react";
import "./Projects.css";
import { projects } from "../data";
import Zoom from "react-reveal/Zoom";

const Projects = () => {
  return (
    <div class="projects" id="projects">
      <h1>Projects</h1>
      <div class="projects-container">
        {projects.map((data) => (
          <div class="info-container">
              <Zoom bottom>
              <div class="text-info">
                <h2>{data.title}</h2>
                <h3>{data.description}</h3>
                <a href={data.link} rel="noopener noreferrer" target="_blank">
                  ➤{data.linkText}
                </a>
              </div>
              <img src={data.img} alt="" />
          </Zoom>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
