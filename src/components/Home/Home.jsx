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

/* 
*Cambiar TOP 3 por:
  - Próximos Mangas (Proximamente?). Arreglamos problema de BD agregando parte en disponible que diga Pending (Sin stock, pending, available).
  - Mangas más vendidos (TOP). Copia de la comiqueria, no me gusta esto, pero es mejor que nada.
  - Recomendados(?). Problema con esto es que debería tener una base de datos para los usuarios donde guardar los generos más comprados, al igual que una interfaz para los usuarios (Creeme que sería medio muy incómodo ;-;).
*/
