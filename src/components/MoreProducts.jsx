import React from "react";
import Mug from "./Mug";
import "../styles/MoreProducts.css";
import "../styles/Content.css";
const mugsData = [
  {
    url: "./Mugs/trent-erwin.jpg",
    name: "Red Love Cup",
    price: "25.00",
    sale: "37.00",
    isSale: true,
  },
  {
    url: "./Mugs/steve-harvey.jpg",
    name: "Black Tea Cup",
    price: "15.00",
    sale: "29.00",
    isSale: true,
  },
  {
    url: "./Mugs/ronaldo-arthur-vidal.jpg",
    name: "B&W Essentials Mug",
    price: "19.00",
    isSale: false,
  },
  {
    url: "./Mugs/rocknwool.jpg",
    name: "Winter Style Mug",
    price: "25.00",
    isSale: false,
  },
  {
    url: "./Mugs/rawpixel.jpg",
    name: "Ceramic Tea",
    price: "46.00",
    isSale: false,
  },
  {
    url: "./Mugs/nathan-dumlao.jpg",
    name: "No Handle Bar Cup",
    price: "34.00",
    isSale: false,
  },
  {
    url: "./Mugs/natanja-grun.jpg",
    name: "Espresso Cup by Mugs.co",
    price: "25.00",
    isSale: false,
  },
  {
    url: "./Mugs/liana-mikah.jpg",
    name: "Pink Premium Ceramic",
    price: "99.00",
    isSale: false,
  },
  {
    url: "./Mugs/levi-guzman.jpg",
    name: "Summer Designer Cup",
    price: "29.00",
    isSale: false,
  },
];

const MoreProducts = ({ display, data }) => {
  return (
    <div className="moreProductsSection">
      {display && <p className="third-para">MORE PRODUCTS</p>}
      <br />
      <div className="moreProducts">
        {(data || mugsData).map((element) => {
          return (
            <div className="eachMug">
              <Mug {...element} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoreProducts;
