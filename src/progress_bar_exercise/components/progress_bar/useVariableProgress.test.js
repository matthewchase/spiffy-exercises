import {
  calcStepDuration,
  getBreakPointDurations,
  getDurationDelays,
} from "./useVariableProgress";

describe("useProgressBar helpers", () => {
  test("calcStepDuration returns correct length of time between 20% of 15", () => {
    expect(calcStepDuration(0, 20)).toEqual(3.3);
  });

  test("getBreakPointDurations is empty", () => {
    expect(getBreakPointDurations()).toEqual([15]);
  });

  test("getBreakPointDurations is array of items", () => {
    expect(getBreakPointDurations([10, 20, 40, 90])).toEqual([
      1.65, 1.65, 3.3, 8.4,
    ]);
  });

  test("getDurationDelays ", () => {
    expect(getDurationDelays([1.65, 1.65, 3.3, 8.4])).toEqual([
      0, 1650, 3300, 6600,
    ]);
  });
});
