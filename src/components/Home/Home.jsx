import React from "react";
import "./Home.scss";
import manga1 from "../../images/manga1.png";
import manga2 from "../../images/manga2.jpg";
import manga3 from "../../images/manga3.jpg";

export const Home = () => {
  return (
    <div className="divHome">
      <div className="homeBanner">
        <p>MyPanels!</p>
        <span>Coming soon...</span>
      </div>
      <div className="homeTop">
        <div className="homeTopTitle">
          <p>TOP 3</p>
        </div>
        <div className="homeTopProd">
          <div className="posicion">
            <div className="p">
              <p className="num">#2</p>
              <p className="name">
                My Hero Academia <span>VOL.5</span>
              </p>
            </div>
            <div className="img2">
              <img src={manga1} alt="" />
            </div>
          </div>
          <div className="posicion">
            <div className="p">
              <p className="num">#1</p>
              <p className="name">
                Fire Force <span>VOL.27</span>
              </p>
            </div>
            <div className="img1">
              <img src={manga2} alt="" />
            </div>
          </div>
          <div className="posicion">
            <div className="p">
              <p className="num">#3</p>
              <p className="name">
                Dragon Ball Super <span>VOL.18</span>
              </p>
            </div>
            <div className="img3">
              <img src={manga3} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="scrollText">
        <div class="scrollText__title">
          <div>
            <h1>
              <a href="https://www.lacomiqueria.com.ar/" target="_blank">
                Ivrea
              </a>
              <a href="https://tiendapanini.com.ar/" target="_blank">
                Panini
              </a>
              <a href="https://www.ovnipress.net/" target="_blank">
                Ovni
              </a>
            </h1>
            <h1>
              <a href="https://www.lacomiqueria.com.ar/" target="_blank">
                Ivrea
              </a>
              <a href="https://tiendapanini.com.ar/" target="_blank">
                Panini
              </a>
              <a href="https://www.ovnipress.net/" target="_blank">
                Ovni
              </a>
            </h1>
          </div>
        </div>
      </div>
      <div className="homeGenre"></div>
    </div>
  );
};

/* 
*Cambiar TOP 3 por:
  - Próximos Mangas (Proximamente?). Arreglamos problema de BD agregando parte en disponible que diga Pending (Sin stock, pending, available).
  - Mangas más vendidos (TOP). Copia de la comiqueria, no me gusta esto, pero es mejor que nada.
  - Recomendados(?). Problema con esto es que debería tener una base de datos para los usuarios donde guardar los generos más comprados, al igual que una interfaz para los usuarios (Creeme que sería medio muy incómodo ;-;).
*/
