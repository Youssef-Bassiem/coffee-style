import React from "react";
import "../styles/Mug.css";

const Mug = ({ url, isSale, name, price, sale }) => {
  console.log(url);
  return (
    <div class="mug">
      <div class="image">
        <div class="overlay">
          <img class="mugImage" width={"500px"} src={url} alt={name} /> 
        </div>
        <button id="onSale"style={{ display: isSale ? "block" : "none" }}>On Sale.</button>
        <button id="explore">EXPLORE MUG</button>
      </div>
      <br />
      <a href="@" target="_blank" class="muglink">
        {name}
      </a>      
      <div class="price">
        <p class="salePrice" style={{ display: isSale ? "inline" : "none" }}>${sale}USD</p>
        <p class="basicPrice">${price}USD</p>
      </div>
    </div>
  );
};


export default Mug;
