import React from "react";
import "./Search.scss";

import { AiOutlineSearch } from "react-icons/ai";

export const Search = () => {
  return (
    <div className="divSearch">
      <div className="filter">
        <p>Filtros</p>
      </div>

      <div className="search">
        <form action="">
          <input type="text" />
          <label>Buscar</label>
          <button>
            <AiOutlineSearch />
          </button>
        </form>
      </div>

      <div className="searchGenres"></div>
    </div>
  );
};
