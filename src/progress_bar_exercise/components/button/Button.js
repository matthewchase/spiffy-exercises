import React from "react";
import "./Button.scss";

export default function Button({ children, onClick, color }) {
  return (
    <button className={`button ${color}`} onClick={onClick}>
      {children}
    </button>
  );
}
