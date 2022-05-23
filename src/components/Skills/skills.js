import React from "react";
import "./skills.css";

import ProgressBar from "react-animated-progress-bar";

const Skills = () => {
  const data = {
    languageData: [
      { label: "C", value: 50 },
      { label: "Javascript", value: 70 },
    ],
    technologyData: [
      { label: "UI/UX", value: 80 },
      { label: "React Native", value: 70 },
      { label: "React JS", value: 50 },
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
