import React from "react";
import "./Button.scss";

export default function Button({ children, onClick }) {
  return (
    // TODO - handle color change request
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
