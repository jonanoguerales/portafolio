import React from "react";
import "../css/components/Title.scss";

function Title({ title, lineCenter = false, colorFondo}) {
  return (
    <div className={`title ${lineCenter === true ? "center" : ""}`}>
      <h2 className={`${colorFondo}`}>{title}</h2>
      <div className="sub">
        <span></span>
      </div>
    </div>
  );
}

export default Title;
