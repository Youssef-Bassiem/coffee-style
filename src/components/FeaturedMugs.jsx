import React from "react";
import Mug from "./Mug";
import "../styles/FeaturedMugs.css";

const mugsData = [
  {
    url: "./Mugs/liana-mikah.jpg",
    name: "Pink Premium Ceramic",
    price: "99.00",
    isSale: false,
  },
  {
    url: "./Mugs/jakub-dziubak.jpg",
    name: "Golden Designers Mug",
    price: "69.00",
    sale: "50.00",
    isSale: true,
  },
];
const FeaturedMugs = () => {
  return (
    <div className="moreProducts">
      {mugsData.map((data) => {
        return <Mug {...data} />;
      })}
    </div>
  );
};

export default FeaturedMugs;
