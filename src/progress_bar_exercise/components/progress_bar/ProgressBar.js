import React from "react";
import "./ProgressBar.scss";

export default function ProgressBar({ isLoading, isFinishing }) {
  // Note - would normally use classnames lib, but intentionally leaving that out for the interview
  let status = isLoading ? "loading" : "";
  status = isFinishing ? "finishing" : status;

  return (
    <div className="progress">
      <div className={`progress-bar progress-bar--${status}`}></div>
    </div>
  );
}
