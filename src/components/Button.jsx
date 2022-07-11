import React from "react";
import "../css/components/Button.scss";

export default function Button({ content, icon = "", color = "blue", type="button" }) {
  return (
    <button className={`${color}`} type={`${type}`}>
      {content} {icon}
    </button>
  );
}
