import React, { useState } from "react";
import BrandName from "../BrandName";
import "./Navbar.css"

const Navbar = () => {

  const $miCheckbox = document.querySelector("#menu__toggle");

  const handleClicked = () => {
    $miCheckbox.checked = false;
  }
  return (
    <div className="top">
      <div className="topLeft">
        <BrandName />
      </div>
      <div className="topRight hamburger-menu">
      <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" htmlFor="menu__toggle">
          <span></span>
        </label>
        <ul className="topList menu__box">
          <li className="topListItem menu__item">
            <a onClick={handleClicked} className="enlace" href="#inicio">Inicio</a>
          </li>
          <li className="topListItem menu__item">
            <a className="enlace" onClick={handleClicked} href="#acerca">Acerca</a>
          </li>

          <li className="topListItem menu__item">
            <a className="enlace" onClick={handleClicked} href="#skills">Skills</a>
          </li>

          <li className="topListItem menu__item">
            <a className="enlace" onClick={handleClicked} href="#portafolio">Portafolio</a>
          </li>
          <li className="topListItem menu__item">
            <a className="enlace" onClick={handleClicked}href="#contacto">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;