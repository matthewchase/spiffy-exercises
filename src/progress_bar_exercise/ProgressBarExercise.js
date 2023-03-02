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

const strings = {
  LOADING: "LOADING",
  START_REQUEST: "START REQUEST",
  FINISH_REQUEST: "FINISH REQUEST",
};

const Solution = () => {
  const { isLoading, isFinishing, startRequest, finishRequest } =
    useSimulateRequest();

  return (
    <div>
      <ProgressBar isLoading={isLoading} isFinishing={isFinishing} />

      {/* Note - Would normally use a layout component or tailwind here */}
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <Button onClick={startRequest}>
          {isLoading ? strings.LOADING : strings.START_REQUEST}
        </Button>

        <Button onClick={finishRequest} color="danger">
          {strings.FINISH_REQUEST}
        </Button>
      </div>
    </div>
  );
};
