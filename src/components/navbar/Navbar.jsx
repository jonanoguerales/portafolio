import React from "react";
import BrandName from "../BrandName";
import "./Navbar.css"

const Navbar = () => {

  return (
    <div className="top">
      <div className="topLeft">
        <BrandName />
      </div>
      <div className="topRight hamburger-menu">
      <input id="menu__toggle" type="checkbox" />
        <label class="menu__btn" for="menu__toggle">
          <span></span>
        </label>
        <ul className="topList menu__box">
          <li className="topListItem menu__item">
            <a href="#inicio">Inicio</a>
          </li>
          <li className="topListItem menu__item">
            <a href="#acerca">Acerca</a>
          </li>

          <li className="topListItem menu__item">
            <a href="#skills">Skills</a>
          </li>

          <li className="topListItem menu__item">
            <a href="#portafolio">Portafolio</a>
          </li>
          <li className="topListItem menu__item">
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;