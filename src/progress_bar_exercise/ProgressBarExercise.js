import React, { useState } from "react";
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

const divContainerStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  padding: "20px",
  margin: "20px",
};

const Solution = () => {
  const { isLoading, isFinishing, startRequest, finishRequest } =
    useSimulateRequest();
  const [showProgressBarV2, setShowProgressBarV2] = useState(false);

  return (
    <div>
      <ProgressBar
        isLoading={isLoading}
        isFinishing={isFinishing}
        breakpoints={[20, 40, 60, 90]}
        showV2={showProgressBarV2}
      />

      <div style={divContainerStyle}>
        <Button onClick={startRequest}>
          {isLoading ? strings.LOADING : strings.START_REQUEST}
        </Button>

        <Button onClick={finishRequest} color="danger">
          {strings.FINISH_REQUEST}
        </Button>

        <Button onClick={() => setShowProgressBarV2(!showProgressBarV2)}>
          {showProgressBarV2 ? "SHOW V1" : "SHOW V2"}
        </Button>
      </div>
    </div>
  );
};
