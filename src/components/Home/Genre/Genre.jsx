import React from "react";
import "./Genre.scss";

import ShonenCat from "../../../images/ShonenCat.jpg";
import ShojoCat from "../../../images/ShojoCat.jpg";
import SeinenCat from "../../../images/SeinenCat.jpg";
import JoseiCat from "../../../images/JoseiCat.jpg";
import KodomoCat from "../../../images/KodomoCat.jpg";
import MasCat from "../../../images/MasCat.jpg";

export const Genre = () => {
  return (
    <div className="genre">
      <div className="genreTitle">
        <p>GENRE</p>
      </div>
      <div className="genreCat">
        <div className="genreCatEgory">
          <div className="genreCatP">
            <p>少年!</p>
            <span>¡Shōnen!</span>
          </div>

          <img src={ShonenCat} alt="Categoría Shonen" />
        </div>
        <div className="genreCatEgory">
          <div className="genreCatP">
            <p>少女!</p>
            <span>¡Shōjo!</span>
          </div>

          <img src={ShojoCat} alt="Categoría Shojo" />
        </div>
        <div className="genreCatEgory">
          <div className="genreCatP">
            <p>青年!</p>
            <span>¡Seinen!</span>
          </div>

          <img src={SeinenCat} alt="Categoría Seinen" />
        </div>
        <div className="genreCatEgory">
          <div className="genreCatP">
            <p>女性!</p>
            <span>¡Josei!</span>
          </div>

          <img src={JoseiCat} alt="Categoría Josei" />
        </div>
        <div className="genreCatEgory">
          <div className="genreCatP">
            <p>子供!</p>
            <span>¡Kodomo!</span>
          </div>

          <img src={KodomoCat} alt="Categoría Kodomo" />
        </div>
        <div className="genreCatEgory">
          <div className="genreCatP">
            <p>もっと!</p>
            <span>¡More Genres!</span>
          </div>

          <img src={MasCat} alt="Más Categorías" />
        </div>
      </div>
    </div>
  );
};
