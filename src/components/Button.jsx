import React from "react";
import "../css/components/Button.scss";

export default function Button({ content, icon = "", color = "blue", type="button",style={}}) {
  return (
    <button className={`${color}`} type={`${type}`} style={style}>
      <div className="boton">{content} {icon}</div>
    </button>
  );
}
