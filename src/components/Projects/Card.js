import React, { useState } from "react";
import "./Card.scss";

import ReactCardFlip from "react-card-flip";

const Card = ({ img, title, description, link, linkText }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div class="card-view" onMouseOver={handleClick}>
        <div class="card">
          <img class="img" src={img} alt="" />
          <h2>{title}</h2>
        </div>
      </div>
      <div class="card-view" onMouseOut={handleClick}>
        <div class="card">
          <h3>{description}</h3>
          <a class="link" href={link} target="_blank" rel="noopener noreferrer">
            {linkText}
          </a>
        </div>
      </div>
    </ReactCardFlip>
  );
};

export default Card;
