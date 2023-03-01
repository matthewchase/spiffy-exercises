import React from "react";
import "./ProgressBar.scss";

export default function ProgressBar({ status }) {
  return (
    <div className="progress">
      <div className={`progress-bar progress-bar--${status}`}></div>
    </div>
  );
}
