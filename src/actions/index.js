import {
  FOCUSINCREASE,
  FOCUSDECREASE,
  BREAKINCREASE,
  BREAKDECREASE,
  RESET,
} from "./constants/index";

export const handleFocusIncrease = () => {
  return { type: FOCUSINCREASE };
};

export const handleFocusDecrease = () => {
  return { type: FOCUSDECREASE };
};
export const handleBreakIncrease = () => {
  return { type: BREAKINCREASE };
};

export const handleBreakDecrease = () => {
  return { type: BREAKDECREASE };
};

export const handleReset = () => {
  return { type: RESET };
};


