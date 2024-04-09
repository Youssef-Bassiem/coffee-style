import React from "react";
import "../styles/HeaderSection.css";
const HeaderSection = () => {
  return (
    <div className="image-container">
      <img src="./Header-Pic.jpg" alt="Header-Pic" width={"900px"} />
      <div className="overlay-text">
        <p className="first-par">BEST PLACE TO BUY DESIGN</p>
        <p className="titles">Coffee Mugs</p>
        <p className="second-par">
          The most versatile furniture system ever created. Designed to fit your
          life, made to move and grow.
        </p>
        <div className="button-holder">
          <button className="casual-button">EXPLORE OUR PRODUCTS</button>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
