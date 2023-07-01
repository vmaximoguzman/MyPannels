import React from "react";
import "./Footer.scss";
import { NavLink } from "react-router-dom";
import logotipo from "../../images/logotipo.jpg";
import { AiOutlineSend } from "react-icons/ai";

export const Footer = () => {
  return (
    <div className="footBar">
      <div className="footNav">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/directory">Directory</NavLink>
          </li>
          <li>
            <NavLink to="/faq">FAQ</NavLink>
          </li>
          <li>
            <NavLink to="/calendar">Calendar</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
      <div className="footInfo">
        <div className="footTipo">
          <img src={logotipo} alt="Logotipo" />
        </div>
        <div className="footNews">
          <p>Newsletter</p>
          <form>
            <button>
              <AiOutlineSend />
            </button>
            <input type="email" name="" />
            <label>Email</label>
          </form>
        </div>
      </div>
    </div>
  );
};
