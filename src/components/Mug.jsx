import React from "react";

const Mug = ({ url, isSale, name, price, sale }) => {
  console.log(url);
  return (
    <div>
      <img width={"500px"} src={url} alt={name} />
      <button>EXPLORE MUG</button>
      <a href="@" target="_blank">
        {name}
      </a>
      <button style={{ display: isSale ? "block" : "none" }}>On Sale.</button>
      <p>${price}USD</p>
      <p style={{ display: isSale ? "block" : "none" }}>${sale}USD</p>
    </div>
  );
};

export default Mug;
