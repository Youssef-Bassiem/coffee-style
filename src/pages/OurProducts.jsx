import React, { useState } from "react";
import SlideShow from "../components/SlideShow";
import MoreProducts from "../components/MoreProducts";
import NotFound from "../pages/NotFound";
const allProductsData = [
  {
    url: "./Mugs/jakub-dziubak.jpg",
    name: "Golden Designers Mug",
    price: "69.00",
    sale: "50.00",
    isSale: true,
  },
  {
    url: "../../Mugs/White Mug Essential.jpg",
    name: "White Mug Essential",
    price: "19.00",
    isSale: false,
  },
  {
    url: "../../Mugs/White Ceramic.jpg",
    name: "White Ceramic",
    price: "29.00",
    isSale: false,
  },
  {
    url: "../../Mugs/Basic White Mug.jpg",
    name: "Basic White Mug",
    price: "15.00",
    isSale: false,
  },
  {
    url: "../../Mugs/Aroma Art Coffee Mug.jpg",
    name: "Aroma Art Coffee Mug",
    price: "39.00",
    isSale: false,
  },
  {
    url: "../../Mugs/Blue Premium Mug.jpg",
    name: "Blue Premium Mug",
    price: "99.00",
    isSale: false,
  },
];
const coffeeMugsData = [
  {
    url: "./Mugs/trent-erwin.jpg",
    name: "Red Love Cup",
    price: "25.00",
    sale: "37.00",
    isSale: true,
  },
  {
    url: "../../Mugs/Basic White Mug.jpg",
    name: "Basic White Mug",
    price: "15.00",
    isSale: false,
  },
  {
    url: "../../Mugs/Aroma Art Coffee Mug.jpg",
    name: "Aroma Art Coffee Mug",
    price: "39.00",
    isSale: false,
  },
];
const othersData = [
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
    url: "./Mugs/levi-guzman.jpg",
    name: "Summer Designer Cup",
    price: "29.00",
    isSale: false,
  },
  {
    url: "../../Mugs/White Mug Essential.jpg",
    name: "White Mug Essential",
    price: "19.00",
    isSale: false,
  },
];
const premiumData = [
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
  {
    url: "../../Mugs/Blue Premium Mug.jpg",
    name: "Blue Premium Mug",
    price: "99.00",
    isSale: false,
  },
];
const teaMugsdata = [
  {
    url: "./Mugs/steve-harvey.jpg",
    name: "Black Tea Cup",
    price: "15.00",
    sale: "29.00",
    isSale: true,
  },
  {
    url: "./Mugs/rawpixel.jpg",
    name: "Ceramic Tea",
    price: "46.00",
    isSale: false,
  },
  {
    url: "../../Mugs/White Ceramic.jpg",
    name: "White Ceramic",
    price: "29.00",
    isSale: false,
  },
];
const OurProducts = () => {
  const [selected, setSelected] = useState("ALL PRODUCTS");

  const showSelectedOption = () => {
    switch (selected) {
      case "ALL PRODUCTS":
        return (
          <>
            <SlideShow />
            <MoreProducts />
            <MoreProducts data={allProductsData} />
          </>
        );
      case "COFFEE MUGS":
        return <MoreProducts data={coffeeMugsData} />;
      case "OTHERS":
        return <MoreProducts data={othersData} />;
      case "PREMIUM":
        return <MoreProducts data={premiumData} />;
      case "TEA MUGS":
        return <MoreProducts data={teaMugsdata} />;
      default:
        return <NotFound />;
    }
  };
  const showSelectedText = () => {
    switch (selected) {
      case "ALL PRODUCTS":
        return (
          <>
            <h3>Our Products</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </>
        );
      case "COFFEE MUGS":
        return (
          <>
            <h3>Coffee Mugs</h3>
            <p>
              Needless to say it’s very important, content is king and people
              are beginning to understand that.
            </p>
          </>
        );
      case "OTHERS":
        return (
          <>
            <h3>Others</h3>
            <p>
              Needless to say it’s very important, content is king and people
              are beginning to understand that.
            </p>
          </>
        );
      case "PREMIUM":
        return (
          <>
            <h3>Premium</h3>
            <p>
              However, back over in reality some project schedules and budgets
              don’t allow for web copy to be written before the design phase.
            </p>
          </>
        );
      case "TEA MUGS":
        return (
          <>
            <h3>Tea Mugs</h3>
            <p>
              However, back over in reality some project schedules and budgets
              don’t allow for web copy to be written before the design phase.
            </p>
          </>
        );
      default:
        return "";
    }
  };
  return (
    <div>
      {showSelectedText()}
      <div>
        <button onClick={() => setSelected("ALL PRODUCTS")}>
          ALL PRODUCTS
        </button>
        <button onClick={() => setSelected("COFFEE MUGS")}>COFFEE MUGS</button>
        <button onClick={() => setSelected("OTHERS")}>OTHERS</button>
        <button onClick={() => setSelected("PREMIUM")}>PREMIUM</button>
        <button onClick={() => setSelected("TEA MUGS")}>TEA MUGS</button>
        <div>{showSelectedOption()}</div>
      </div>
    </div>
  );
};

export default OurProducts;
