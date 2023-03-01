import { useState } from "react";

export default function useSimulateRequest() {
  const [status, setStatus] = useState("idle");

  function startRequest() {
    setStatus("loading");
  }

  function finishRequest() {
    setStatus("finishing");
  }

  return { status, startRequest, finishRequest };
}
