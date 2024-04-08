import React from "react";
import "../styles/Offer.css";
import "../styles/Content.css";
import "../styles/FeaturedMugs.css";

const Offer = () => {
  return (
    <div>
      <p class="third-para">BUY 2 MUGS AND GET A COFFEE MAGAZINE FREE</p>
      <div class="premiumFlex">
        <div class="rightSide">
          <p class="premiumOfferF">PREMIUM OFFER</p>
          <p class="premiumOfferS">Get our Coffee Magazine</p>
          <p class="premiumOfferT">
            The most versatile furniture system ever created. <br /> Designed to fit your
            life.
          </p>
          <button class="startButton">START SHOPPING</button>
        </div>
        <div class="leftSide">
          <img class="leftSideImages sizeAndPosition" src="./Offer/Image3.jpg" alt="" />
          <div class="rightSideImages">
            <img class="size" src="./Offer/Image2.jpg" alt="" />
            <img class="size" src="./Offer/Image.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
