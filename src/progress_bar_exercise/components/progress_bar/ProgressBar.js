import React from "react";
import "./ProgressBar.scss";
import useVariableProgress from "./useVariableProgress";

// ProgressBar simulates the current progress.
export default function ProgressBar({ isLoading, isFinishing, breakpoints }) {
  const { width, duration } = useVariableProgress(isLoading, breakpoints);

  // Styling
  // Note - would normally use classnames lib, but intentionally leaving that out for the interview
  let status = isLoading ? "loading" : "";
  status = isFinishing ? "finishing" : status;

  return (
    <div className="progress">
      <div
        style={
          isLoading
            ? { width: `${width}%`, transition: `width ${duration}s` }
            : {}
        }
        className={`progress-bar progress-bar--${status}`}
      ></div>
    </div>
  );
}
