import { useState, useEffect } from "react";
import { getBreakPointDurations, getDurationDelays } from "./helpers";

/**
 * useVariableProgress allows you to declare an array of
 * breakpoints (intended as percentages like 20 or 40) for the
 * progress bar to slow down as it encounters them.
 */
export default function useVariableProgress(isLoading, breakpoints) {
  const [width, setWidth] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (isLoading) {
      let durations = getBreakPointDurations(breakpoints);
      let delays = getDurationDelays(durations);

      for (let i = 0; i < breakpoints.length; i++) {
        setTimeout(() => {
          setWidth(breakpoints[i]);
          setDuration(durations[i]);
        }, delays[i]);
      }
    }
  }, [isLoading, breakpoints]);

  return { width, duration };
}
