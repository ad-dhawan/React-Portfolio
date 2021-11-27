import React from "react";

const TimelineItem = ({ data }) => (
  <div class="timeline-item">
    <div class="timeline-item-content">
        <time>{data.date}</time>
        <p>{data.title}</p>
        <p class="desc">{data.desc}</p>
        <time>➤ {data.place}</time>
        <span class="tag" style={{background: data.tag.color}}>
            {data.tag.text}
        </span>
        <img src={data.img} alt="" />
    </div>
  </div>
);

export default TimelineItem;
