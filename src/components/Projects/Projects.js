import { Link } from 'react-router-dom'
import "./Projects.scss";
import { projects } from "../data";

const Projects = () => {
  return (
    <div class="projects" id="projects">
      <h1>Projects</h1>
      <div class="container">
        {projects.map((p) => (
          <div class="project-item">
            <img class="project-img" src={p.img} alt="" />
            <div class="details">
              <h2 class="h2">{p.title}</h2>
              <h4 class="h4">{p.description}</h4>
              <a class="link" href={p.link} target="_blank" rel="noopener noreferrer">{p.linkText}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
