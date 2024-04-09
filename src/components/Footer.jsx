import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div>
        <img src="./CoffeeStyle Logo.png" alt="Header-Pic" width={"100px"} />
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/OurProducts">OUR PRODUCTS</Link>
          </li>
          <li>
            <Link to="/Bolg">BLOG</Link>
          </li>
          <li>
            <Link to="/About">ABOUT</Link>
          </li>
          <li>
            <Link to="/Contact">CONTACT</Link>
          </li>
          <li>
            <Link to="/Styleguide">STYLEGUIDE</Link>
          </li>
        </ul>
        <p>We’re Always Happy to Help</p>
        <a href="@">us@coffeestyle.io</a>
      </div>
      <div>
        <p>
          Delivering the best coffee life since 1996. From coffee geeks to the
          real ones.
        </p>
        <p>FOLLOW US</p>
        <a href="@">Powered by Webflow</a>
      </div>
      <div>
        <p>CoffeeStyle Inc. © 1996</p>
        <ul>
          <li>
            <a href="@">Facebook</a>
          </li>
          <li>
            <a href="@">Instagram</a>
          </li>
          <li>
            <a href="@">Pinterest</a>
          </li>
          <li>
            <a href="@">Twitter</a>
          </li>
        </ul>
      </div>
      <div>
        <p>MENU</p>
        <p>CONTACT US</p>
      </div>
    </div>
  );
};

export default Footer;
