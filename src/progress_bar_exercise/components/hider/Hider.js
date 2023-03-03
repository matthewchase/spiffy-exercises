import React, { useEffect, useState } from "react";

/**
 * Hider Component removes children components from the
 * DOM after some given time
 */
export default function Hider({ shouldHide, delayTime, children }) {
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (shouldHide) {
      if (!delayTime) {
        setShow(false);
      }
      setTimeout(() => {
        setShow(false);
      }, delayTime);
    }
  }, [delayTime, shouldHide]);
  return <>{show && children}</>;
}
