const TOTAL_TIME_LENGTH = 15; // 15 seconds is how long the progress bar takes to reach LAST_POINT
const LAST_POINT = 90; // LAST POINT is the percent the progress will slow to a stop while waiting
const ONE_SECOND_IN_MILLESCONDS = 1000;

// Useful for determining the time in seconds for the progress bar to take between two percentage points
export function calcStepDuration(prevPoint, currentPoint) {
  const distance = currentPoint - prevPoint;
  const distanceRatio = distance / LAST_POINT;
  const distanceInTime = TOTAL_TIME_LENGTH * distanceRatio.toFixed(2);

  return distanceInTime;
}

// Determines the duration in seconds between all progress bar percentage breakpoints
export function getBreakPointDurations(breakpoints = [90]) {
  return breakpoints.map((bp, i) => {
    let previousBP = breakpoints[i - 1] ?? 0;
    return calcStepDuration(previousBP, bp);
  });
}

// Determines the delay period for subsequent timeouts, since progress bar fires off multiple setTimeouts
export function getDurationDelays(durations) {
  let totalDelay = 0;

  return durations.map((duration) => {
    let delay = totalDelay;
    totalDelay += duration;
    return delay * ONE_SECOND_IN_MILLESCONDS;
  });
}
