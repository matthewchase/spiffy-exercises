import { useState, useEffect } from "react";

// NOTE - Ideally some of these constants and helpers would be in their own file
const TOTAL_TIME_LENGTH = 15;
const LAST_POINT = 90;
const ONE_SECOND_IN_MILLESCONDS = 1000;

// Calculate the duration of a step based on the distance between
// two points
export const calcStepDuration = (prevPoint, currentPoint) => {
  const distance = currentPoint - prevPoint;
  const distanceRatio = distance / LAST_POINT;
  const distanceInTime = TOTAL_TIME_LENGTH * distanceRatio.toFixed(2);

  return distanceInTime;
};

export const getBreakPointDurations = (breakpoints = [90]) =>
  breakpoints.map((bp, i) => {
    let previousBP = breakpoints[i - 1] ?? 0;
    return calcStepDuration(previousBP, bp);
  });

export function getDurationDelays(durations) {
  let totalDelay = 0;

  return durations.map((duration) => {
    let delay = totalDelay;
    totalDelay += duration;
    return delay * ONE_SECOND_IN_MILLESCONDS;
  });
}

/** useVariableProgress allows you to declare an array of
 * breakpoints (intended as percentages like 20 or 40) that the
 * progress bar will slow down as as it encounters them.
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
