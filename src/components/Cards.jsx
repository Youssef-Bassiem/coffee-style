import React from "react";
import { useState } from "react";
import "../styles/Cards.css";
import "../styles/Content.css";
import "../styles/Mug.css";
import "../styles/Offer.css";
const Cards = () => {
  const [cardsData] = useState([
    {
      url: "./Section_2/bar-cafe-caffeine.jpg",
      link: "Health Check: why do I get a headache when I haven’t had my coffee?",
      text: "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
      time: "OCTOBER 9, 2018",
    },
    {
      url: "./Section_2/Blog Pic Head 1.jpg",
      link: "How long does a cup of coffee keep you awake?",
      text: "It is a paradisematic country, in which roasted parts. Vel qui et ad voluptatem.",
      time: "OCTOBER 9, 2018",
    },
    {
      url: "./Section_2/Blog Pic Head 8.jpg",
      link: "Recent research suggests that heavy coffee drinkers may reap health benefits.",
      text: "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
      time: "OCTOBER 9, 2018",
    },
  ]);
  return (
    <div>
      <br />
      <div class="storiesTitle">BEHIND THE MUGS, LIFESTYLE STORIES</div>
      <div class="flexCards">
      {cardsData.map(({ url, link, text, time }) => {
        return (
          <div class="storyCard">
            <div class="storyContainer">
              <img class="imageOfStories" src={url} alt="" width={"500px"} />
              <button id="storyButton">READ THE FULL STORY</button>
            </div>
            <button class="storyLink">{link}</button>
            <p class="premiumOfferT">{text}</p>
            <p class="date">{time}</p>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default Cards;
