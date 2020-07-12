import {
  FOCUSINCREASE,
  FOCUSDECREASE,
  BREAKINCREASE,
  BREAKDECREASE,
  RESET,
} from "../constants/index";

const initialState = {
  breakTime: 5,
  sessionTime: 25,
};

export default function timerReducer(state = initialState, action) {
  switch (action.type) {
    case FOCUSINCREASE: {
      return {...initialState, sessionTime: initialState.sessionTime + 1};
    }
    case FOCUSDECREASE: {
      return {...initialState, sessionTime: initialState.sessionTime - 1};
    }
    case BREAKINCREASE: {
      return {...initialState, breakTime: initialState.breakTime + 1};
    }
    case BREAKDECREASE: {
      return {...initialState, breakTime: initialState.breakTime - 1};
    }
    case RESET: {
      return initialState;
    }
    default:
      return initialState;
  }
}


