import React, { useState, useEffect } from "react";
import "./Projects.scss";

import Domains from "../Project Domains/Domains";
import { apps, game, graphics, website } from "../data";

import app from "../../Assets/app.png";
import web from "../../Assets/web.png";
import games from "../../Assets/game.png";
import design from "../../Assets/graphic.png";

const Projects = () => {
  const [selected, setSelected] = useState("apps");
  const [data, setData] = useState([]);
  const projects = [
    {
      id: "apps",
      title: "App Development",
      img: app,
    },
    {
      id: "game",
      title: "Game Development",
      img: games,
    },
    {
      id: "graphics",
      title: "Graphic Designing",
      img: design,
    },
    {
      id: "web",
      title: "Web Development",
      img: web,
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "apps":
        setData(apps);
        break;
      case "game":
        setData(game);
        break;
      case "graphics":
        setData(graphics);
        break;
      case "web":
        setData(website);
        break;
      default:
        setData(apps);
    }
  }, [selected]);
  return (
    <div class="projects" id="projects">
      <h1>Projects</h1>
      <div class="container" >
        {projects.map((item) => (
          <Domains
            title={item.title}
            img={item.img}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
