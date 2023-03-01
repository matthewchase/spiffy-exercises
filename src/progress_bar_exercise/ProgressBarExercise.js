import React from "react";
import Exercise from "../exercise/Exercise";
import Button from "./components/button/Button";
import ProgressBar from "./components/progress_bar/ProgressBar";
import useSimulateRequest from "./hooks/useSimulateNetworkRequest";

const ProgressBarExercise = () => {
  return (
    <div className="progress-bar-exercise">
      <Exercise
        solution={<Solution />}
        specsUrl="https://github.com/SpiffInc/spiff_react_exercises/issues/1"
        title="Progress Bar Exercise"
      />
    </div>
  );
};

export default ProgressBarExercise;

// ----------------------------------------------------------------------------------

const Solution = () => {
  const { status, startRequest, finishRequest } = useSimulateRequest();
  return (
    <div>
      {/* Note -- this separation of concerns isn't ideal since the component needs to know 
      the exact strings in hook. See if there is a cleaner way to accomplish that. */}
      <ProgressBar status={status} />
      {/* TODO, add state for loading button text */}
      <Button onClick={startRequest}>START REQUEST</Button>
      {/* Note - ideally these strings would be kept elsewhere for easier translations */}
      <Button onClick={finishRequest}>FINISH REQUEST</Button>
    </div>
  );
};
