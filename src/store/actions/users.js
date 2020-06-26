export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER";
export const SET_USERS_LIST = "SET_USERS_LIST";
export const SORT_BY_AGE = "SORT_BY_AGE";

export const addUser = (newUser) => {
  return {
    type: ADD_USER,
    user: newUser,
  };
};

export const deleteUser = (id) => {
  return {
    type: DELETE_USER,
    userId: id,
  };
};

export const setUsersList = (users) => {
  return { type: SET_USERS_LIST, users };
};

export const sortByAge = (direction) => {
  return {
    type: SORT_BY_AGE,
    direction,
  };
};
