import React from "react";
import { BiHomeAlt2, BiSearch } from "react-icons/bi";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import img from "../../images/MyPannelsLogo.png";

export const Navbar = () => {
  return (
    <div className="divBar">
      <div className="navLogo">
        <NavLink to="/">
          <img src={img} alt="MyPannels Logo" />
        </NavLink>
      </div>
      <div className="navEgation">
        <ul>
          <li>
            <NavLink to="/">
              <BiHomeAlt2 />
            </NavLink>
          </li>
          <li>
            <NavLink to="/directory">
              <BiSearch />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
