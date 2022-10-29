import React from "react";
import "./ResultCard.css";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

function ResultCard({ title, category, area, tags, image }) {
  return (
    <div className="resultCard">
      <div className="resultCard__container">
        <div className="resultCard__img--wrapper">
          <img
            src={image}
            alt=""
          />
          <div className="img__backdrop">
            See more <KeyboardDoubleArrowRightIcon className="card__arrow" />
          </div>
        </div>
        <div className="resultCard__description">
          <h2>{title}</h2>
          <h3>
            <span className="orange">Category: </span> {category}
          </h3>
          <h3>
            <span className="orange">Area: </span> {area}
          </h3>
          {tags && <h4>
            <span className="orange">Tags: </span> {tags}
          </h4>}
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
