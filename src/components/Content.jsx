import React from "react";
import FeaturedMugs from "../components/FeaturedMugs";
import MoreProducts from "../components/MoreProducts";
import Offer from "../components/Offer";
import "../styles/Content.css"

const Content = () => {
  return (
    <div>
      <p class="first-para">
        Even the all-powerful Pointing has no control about <br /> the blind texts.
      </p>
      <p class="second-para">
        It is a paradisematic country, in which roasted parts of sentences fly
        into your mouth. <br/> Even the all-powerful Pointing has no control about the
        blind texts it is an almost<br/> unorthographic life One day however a small
        line of blind text by the name of Lorem<br/> Ipsum decided to leave for the
        far World of Grammar.
      </p>
      <a href="@" class="story">Read the full Story</a>
      <p class="third-para">FEATURED MUGS</p>
      <FeaturedMugs />
      <MoreProducts />
      <Offer />
    </div>
  );
};

export default Content;
