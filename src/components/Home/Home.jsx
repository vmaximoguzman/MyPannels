import React from "react";
import "./Home.scss";

import { Banner } from "./Banner/Banner";
import { Top } from "./TOP/Top";
import { ScrollText } from "./ScrollText/ScrollText";
import { Genre } from "./Genre/Genre";

export const Home = () => {
  return (
    <div className="divHome">
      <Banner />

      <Top />

      <ScrollText />

      <Genre />
    </div>
  );
};
