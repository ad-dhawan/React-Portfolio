import React from "react";
import "./skills.css";

import ProgressBar from "react-animated-progress-bar";

const Skills = () => {
  const data = {
    languageData: [
      { label: "C", value: 80 },
      { label: "Javascript", value: 80 },
      { label: "Kotlin", value: 70 },
      { label: "HTML", value: 60 },
      { label: "CSS", value: 60 },
      { label: "C++", value: 60 },
    ],
    technologyData: [
      { label: "React Native", value: 90 },
      { label: "Node JS", value: 80 },
      { label: "React JS", value: 70 },
      { label: "Android App Development", value: 60 },
      { label: "Unity Game Development", value: 50 },
    ],
  };
  return (
    <div class="skills" id="skills">
      <h1>Skills</h1>
      <div class="skills-container">
          <div class="rectangle-bar-container">
            {data.technologyData.map((data) => (
              <div class="rectangle-bar-item">
                <h3>{data.label}</h3>
                <ProgressBar
                  width="350px"
                  height="10px"
                  rect
                  fontColor="gray"
                  percentage={data.value}
                  rectPadding="1px"
                  rectBorderRadius="20px"
                  trackPathColor="transparent"
                  bgColor="#333333"
                  trackBorderColor="grey"
                  defColor={{
                    fair: "#69779b",
                    good: "#69779b",
                    excellent: "#69779b",
                    poor: "#69779b",
                  }}
                />
              </div>
            ))}
          </div>
          <div class="circle-bar-container">
            {data.languageData.map((data) => (
              <div class="circle-bar-item">
                <ProgressBar
                  class="circular-progress-bar"
                  width="200"
                  trackWidth="13"
                  percentage={data.value}
                  defColor={{
                    fair: "#69779b",
                    good: "#69779b",
                    excellent: "#69779b",
                    poor: "#69779b",
                  }}
                />
                <h3>{data.label}</h3>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default Skills;
