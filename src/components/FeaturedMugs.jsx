import React from "react";
import Mug from "./Mug";
import { useState } from "react";

const FeaturedMugs = () => {
  const [mugsData] = useState([
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
  ]);
  return (
    <>
      {mugsData.map(({ url, name, price, sale, isSale }) => {
        return (
          <Mug
            url={url}
            name={name}
            price={price}
            sale={sale}
            isSale={isSale}
          />
        );
      })}
    </>
  );
};

export default FeaturedMugs;
