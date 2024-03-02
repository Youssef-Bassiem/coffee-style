import React from "react";
import HeaderSection from "../components/HeaderSection";
import Content from "../components/Content";
import Parallel from "../components/Parallel";
import Cards from "../components/Cards";
import Subscribe from "../components/Subscribe";

const Home = () => {
  return (
    <>
      <HeaderSection />
      <Content />
      <Parallel />
      <Cards />
      <Subscribe />
    </>
  );
};

export default Home;
