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
      <p>${price}USD</p>
      <p style={{ display: isSale ? "block" : "none" }}>${sale}USD</p>
    </div>
  );
};

export default Mug;
