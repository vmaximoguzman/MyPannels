import React from "react";
import "./Home.scss";

import { HomeBanner } from "./HomeBanner/HomeBanner";
import { Top } from "./TOP/Top";
import { ScrollText } from "./ScrollText/ScrollText";
import { Genre } from "./Genre/Genre";

export const Home = () => {
  return (
    <div className="divHome">
      <HomeBanner />

      <Top />

      <ScrollText />

      <Genre />
    </div>
  );
};
