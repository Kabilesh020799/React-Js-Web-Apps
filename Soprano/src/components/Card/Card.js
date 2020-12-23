import React from "react";

import StarRatings from "react-star-ratings";

import "./Card.css";
import Eye from "../../assets/icons/eye.svg";

function Card({ item }) {
  return (
    <div className="card">
      <div className="card__star">
        <StarRatings
          rating={item.star}
          starRatedColor="yellow"
          numberOfStars={5}
          starDimension="15px"
          starSpacing="2px"
        />
        {item.star}({item.reviews}reviews)
      </div>
      <div className="card__title">{item.title}</div>
      <div className="card__tile">
        <img src={Eye} alt="eye" />
        <span>{item.watch} students watched</span>
      </div>
    </div>
  );
}

export default Card;
