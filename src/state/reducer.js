import { UPDATE_TIME_RANGE } from "./action";

export const timeDataReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_TIME_RANGE: {
      return handleTimeChange(state, payload);
    }
    default:
      return state;
  }
};

const handleTimeChange = (state, id) => {
  let result = state?.map((button) => {
    if (button.id === id) {
      return { ...button, isActive: !button.isActive, variant: "solid" };
    } else {
      return { ...button, variant: "ghost", isActive: false };
    }
  });
  return result;
};
