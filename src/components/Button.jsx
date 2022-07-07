import React from "react";
import "../css/components/Button.scss";

export default function Button({ content, icon = "", color = "blue" }) {
  return (
    <button className={`${color}`}>
      {content} {icon}
    </button>
  );
}
