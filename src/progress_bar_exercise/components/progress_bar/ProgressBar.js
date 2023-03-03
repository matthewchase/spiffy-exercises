import React from "react";
import "./ProgressBar.scss";
import useVariableProgress from "./useVariableProgress";

export default function ProgressBar({
  isLoading,
  isFinishing,
  breakpoints,
  showV2,
}) {
  const { width, duration } = useVariableProgress(isLoading, breakpoints);

  const status = isLoading ? "loading" : isFinishing ? "finishing" : "";

  return (
    <div className="progress">
      <div
        style={
          isLoading && showV2
            ? { width: `${width}%`, transition: `width ${duration}s` }
            : {}
        }
        className={`progress-bar progress-bar--${status}`}
      ></div>
    </div>
  );
}
