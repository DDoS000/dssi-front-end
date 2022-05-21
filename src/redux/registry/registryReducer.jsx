const initialState = {
  data: [],
};

const registryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_REGISTRY":
      return { ...state, data: action.registry };

    default:
      return { ...state };
  }
};

export default registryReducer;
