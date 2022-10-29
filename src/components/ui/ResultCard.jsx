import React from "react";
import "./ResultCard.css";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

function ResultCard() {
  return (
    <div className="resultCard">
      <div className="resultCard__container">
        <div className="resultCard__img--wrapper">
          <img
            src="https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg"
            alt=""
          />
          <div className="img__backdrop">
            See more <KeyboardDoubleArrowRightIcon className="card__arrow" />
          </div>
        </div>
        <div className="resultCard__description">
          <h2>Spicy Arrabiata Penne</h2>
          <h3>
            <span className="orange">Category: </span> Vegetarian
          </h3>
          <h3>
            <span className="orange">Area: </span> Italian
          </h3>
          <h4>
            <span className="orange">Tags: </span> Pasta, Curry
          </h4>
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
