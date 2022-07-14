import React, { useState } from "react";
import BrandName from "../BrandName";
import "./Navbar.css"

const Navbar = () => {

  const [isChecked, setIsChecked] = useState(false);
  
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  }
  return (
    <div className="top">
      <div className="topLeft">
        <BrandName />
      </div>
      <div className="topRight hamburger-menu">
      <input id="menu__toggle" type="checkbox" checked={isChecked} onChange={handleOnChange}/>
        <label className="menu__btn" htmlFor="menu__toggle">
          <span></span>
        </label>
        <ul className="topList menu__box">
          <li className="topListItem menu__item">
            <a onClick={handleOnChange} className="enlace" href="#inicio">Inicio</a>
          </li>
          <li className="topListItem menu__item">
            <a className="enlace" onClick={handleOnChange} href="#acerca">Acerca</a>
          </li>

          <li className="topListItem menu__item">
            <a className="enlace" onClick={handleOnChange} href="#skills">Skills</a>
          </li>

          <li className="topListItem menu__item">
            <a className="enlace" onClick={handleOnChange} href="#portafolio">Portafolio</a>
          </li>
          <li className="topListItem menu__item">
            <a className="enlace" onClick={handleOnChange}href="#contacto">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;