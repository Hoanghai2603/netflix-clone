import React from "react";
import "./banner.scss";

const Banner = () => {
  return (
    <div className="big__ban__container">
      <div className="ban__container">
        <div className="ban__container__contents">
          <h1 className="banner__title">Movie Name</h1>
          <div className="ban__container__button">
            <button className="banner__btn">Play</button>
            <button className="banner__btn">My List</button>
          </div>
          <h1 className="banner__description">This is a test description</h1>
          <div className="banner--fadeBottom"/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
