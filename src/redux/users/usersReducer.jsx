const initialState = {
  allData: [],
  data: [],
  total: 1,
  params: {},
  userCreate: [],
  selectedUser: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_DATA":
      return { ...state, allData: action.data };

    case "GET_DATA":
      return {
        ...state,
        data: action.data,
        total: action.totalPages,
        params: action.params,
      };

    case "GET_USER":
      return { ...state, selectedUser: action.selectedUser };

    case "ADD_USER":
      return { ...state };
      
    case "CHANGE_PASSWORD":
      return { ...state };

    case "CREATE_USER":
      return { ...state, userCreate: action.userCreate };

    case "DELETE_USER":
      return { ...state };

    case "CLEAR_USERCREATE":
      return { ...state, userCreate: [] };

    default:
      return { ...state };
  }
};

export default usersReducer;