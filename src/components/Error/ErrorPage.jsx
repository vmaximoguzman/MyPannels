import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ErrorPage.scss";

export const ErrorPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const homeLink = setTimeout(() => {
      console.log("5 seconds passed");
      navigate("/");
    }, 5000);

    return () => clearTimeout(homeLink);
  }, []);

  return (
    <div className="errorPage">
      <p className="gomenasai">ごめんなさい</p>
      <p className="errorMessage">¡Encontramos un Error!</p>
      <span className="redirecting">Redireccionando al Inicio.</span>
    </div>
  );
};
