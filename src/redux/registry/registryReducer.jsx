import { act } from "react-dom/test-utils";

const initialState = {
  data: {},
};

const registryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_DATA":
      return { ...state, data: action.data };

    default:
      return { ...state };
  }
};

export default registryReducer;
