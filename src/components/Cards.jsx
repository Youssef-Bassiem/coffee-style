import React from "react";
import { useState } from "react";

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
      text: "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
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
    <>
      {cardsData.map(({ url, link, text, time }) => {
        return (
          <>
            <img src={url} alt="" width={"500px"} />
            <button>READ THE FULL STORY</button>
            <button>{link}</button>
            <p>{text}</p>
            <p>{time}</p>
          </>
        );
      })}
    </>
  );
};

export default Cards;
