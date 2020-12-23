import React, { useEffect, useState } from "react";

import "./PriceCard.css";

import Tick from "../../assets/icons/tickcolor.svg";
import Cross from "../../assets/icons/tickblank.svg";

function PriceCard({ title, subTitle, items, recommend }) {
  return (
    <div className="pricecard">
      {recommend && <div className="pricecard__recommend">Recommended</div>}
      <div className="pricecard__top">
        <div className="pricecard__right">
          <div className="pricecard__head">{title}</div>
          <div className="pricecard__subhead">{subTitle}</div>
        </div>
        {recommend && (
          <div className="pricecard__left">
            Starting from <br /> <span className="left__price">49.99/mo</span>
          </div>
        )}
      </div>
      <div className="pricecard__items">
        {items.map((item) => (
          <div className="pricecard__item">
            {item.checked ? (
              <img src={Tick} alt="tick" />
            ) : (
              <img src={Cross} alt="cross" />
            )}
            <div className="pricecard__itemTitle">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PriceCard;
