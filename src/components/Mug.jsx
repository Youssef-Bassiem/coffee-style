import React from "react";
import "../styles/Mug.css";

const Mug = ({ url, isSale, name, price, sale }) => {
  console.log(url);
  return (
    <div className="mug">
      <div className="image">
        <div className="overlay">
          <img className="mugImage" src={url} alt={name} />
        </div>
        <button id="onSale" style={{ display: isSale ? "block" : "none" }}>
          On Sale.
        </button>
        <button id="explore">EXPLORE MUG</button>
      </div>
      <br />
      <a href="@" target="_blank" className="muglink">
        {name}
      </a>
      <div className="price">
        <p
          className="salePrice"
          style={{ display: isSale ? "inline" : "none" }}
        >
          ${sale}USD
        </p>
        <p className="basicPrice">${price}USD</p>
      </div>
    </div>
  );
};

export default Mug;
