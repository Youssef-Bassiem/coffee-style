import React from "react";
import "../styles/HeaderSection.css"
const HeaderSection = () => {
  return (
    <div class="image-container">
      <img src="./Header-Pic.jpg" alt="Header-Pic" width={"900px"} />
      <div class="overlay-text">
        <p class="first-par">BEST PLACE TO BUY DESIGN</p>
        <p class="titles">Coffee Mugs</p>
        <p class="second-par">
          The most versatile furniture system ever created. Designed to fit your
          life, made to move and grow.
        </p>
        <div class="button-holder">
        <button class="casual-button">EXPLORE OUR PRODUCTS</button>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
