import { ReactElement, useState } from "react";

export function applyMultistepForm(steps: ReactElement[]) {
  const [currentStepIdx, setCurrStepIdx] = useState(0);

  function goNext() {
    setCurrStepIdx((currIdx) => {
      if (currIdx >= steps.length - 1) return currIdx;
      return currIdx + 1;
    });
  }

  function goBack() {
    setCurrStepIdx((currIdx) => {
        if (currIdx <= 0) return currIdx;
        return currIdx - 1;
      });
  }

  function goTo(index: number) {
    setCurrStepIdx(index);
  }

  return {
    currentStepIdx,
    currentStep: steps[currentStepIdx],
    goNext,
    goBack,
    goTo
  };
}
