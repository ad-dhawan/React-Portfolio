import React from "react";
import timelineData from "./data";
import TimelineItem from "./TimelineItem";
import Flip from "react-reveal/Flip";

const Timeline = () =>
  timelineData.length > 0 && (
    <div class="timeline-container">
      {timelineData.map((data, id) => (
        <TimelineItem data={data} key={id} />
      ))}
    </div>
  );

export default Timeline;
