import { useState } from "react";

const STATUS = {
  IDLE: "IDLE",
  LOADING: "LOADING",
  FINISHING: "FINISHING",
};

export default function useSimulateRequest() {
  const [status, setStatus] = useState(STATUS.IDLE);

  const startRequest = () => setStatus(STATUS.LOADING);
  const finishRequest = () => setStatus(STATUS.FINISHING);

  const isLoading = status === STATUS.LOADING;
  const isFinishing = status === STATUS.FINISHING;

  return { isLoading, isFinishing, startRequest, finishRequest };
}
