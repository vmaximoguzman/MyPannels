import React from "react";
import "./Directory.scss";
import { Search } from "./Search/Search";
import { Products } from "./Products/Products";
import { DirecBanner } from "./Banner/DirecBanner";

export const Directory = () => {
  return (
    <div className="divDirectory">
      <DirecBanner />

      <Search />

      <Products />
    </div>
  );
};
