import React, { useEffect, useState } from "react";
import "./Portfolio.scss";
import PortfolioList from "../PortfolioList/PortfolioList";

import {
  projectsPortfolio,
  skillsPortfolio,
  experiencePortfolio,
  designPortfolio,
} from "../data";

const Portfolio = () => {
  const [selected, setSelected] = useState("skills");
  const [data, setData] = useState([]);
  const list = [
    // {
    //   id: "projects",
    //   title: "Projects",
    // },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "experience",
      title: "Experience",
    },
    // {
    //   id: "designing",
    //   title: "Designing",
    // },
  ];

  useEffect(() => {
    switch (selected) {
      // case "projects":
      //   setData(projectsPortfolio);
      //   break;
      case "skills":
        setData(skillsPortfolio);
        break;
      case "experience":
        setData(experiencePortfolio);
        break;
      // case "designing":
      //   setData(designPortfolio);
      //   break;
      default:
        setData(skillsPortfolio);
    }
  }, [selected]);

  return (
    <div class="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div class="container">
        {data.map((d) => (
          <div class="item">
            <img src={d.img} alt="" />
            <div class="title">
            <h3>{d.title}</h3>
            </div>
          </div>
        ))}
      </div>
  </div>
  );
};

export default Portfolio;
