import { INCREASE, DECREASE } from "./constants/index";

const handleIncrease = () => {
  return { type: INCREASE };
};

const handleDecrease = () => {
  return { type: DECREASE };
};

export default { handleIncrease, handleDecrease };
