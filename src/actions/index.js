import {
  FOCUSINCREASE,
  FOCUSDECREASE,
  BREAKINCREASE,
  BREAKDECREASE,
  RESET,
} from "./constants/index";

const handleFocusIncrease = () => {
  return { type: FOCUSINCREASE };
};

const handleFocusDecrease = () => {
  return { type: FOCUSDECREASE };
};
const handleBreakIncrease = () => {
  return { type: BREAKINCREASE };
};

const handleBreakDecrease = () => {
  return { type: BREAKDECREASE };
};

const handleReset = () => {
  return { type: RESET };
};

export default {
  handleFocusIncrease,
  handleFocusDecrease,
  handleBreakIncrease,
  handleBreakDecrease,
  handleReset,
};
