import AuthService from "../../services/auth.service";

export const getAllData = () => {
  return async (dispatch) => {
    await AuthService.GetUser().then((response) => {
      dispatch({
        type: "GET_ALL_DATA",
        data: response.data,
      });
    });
  };
};

export const getData = (params) => {
  return async (dispatch) => {
    await AuthService.GetUserFilter(params).then((response) => {
      dispatch({
        type: "GET_DATA",
        data: response.data,
      });
    });
  };
};

export const getUser = (id) => {
  return async (dispatch) => {
    await AuthService.GetUserById(id)
      .then((response) => {
        dispatch({
          type: "GET_USER",
          selectedUser: response.data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const addUser = (user) => {
  return (dispatch) => {
    instance
      .post("/apps/users/add-user", user)
      .then((response) => {
        dispatch({
          type: "ADD_USER",
          user,
        });
      })
      .then(() => {
        dispatch(getData({ q: "" }));
        dispatch(getAllData());
      })
      .catch((err) => console.log(err));
  };
};

export const createUser = (user) => {
  return async (dispatch) => {
    await AuthService.createUser(user)
      .then((response) => {
        dispatch({
          type: "CREATE_USER",
          userCreate: response.data,
        });
      })
      .then(() => {
        dispatch(getData({ q: "" }));
        dispatch(getAllData());
      });
  };
};

export const deleteUser = (id) => (dispatch) => {
  return AuthService.DeleteUser(id)
    .then(() => {
      dispatch({
        type: "DELETE_USER",
      });

      return Promise.resolve();
    })
    .then(() => {
      dispatch(getData({ q: "" }));
      dispatch(getAllData());
    });
};

export const clearUserCreate = () => {
  return (dispatch) => {
    dispatch({
      type: "CLEAR_USERCREATE",
    });
    dispatch(getData({ q: "" }));
    dispatch(getAllData());
  };
};

export const ChangePassword =
  (id, old_password, new_password) => (dispatch) => {
    return AuthService.ChangePassword(id, old_password, new_password).then(
      (response) => {
        dispatch({
          type: "CHANGE_PASSWORD",
        });

        return response.data;
      }
    );
  };
