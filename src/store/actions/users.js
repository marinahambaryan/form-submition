export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER";
export const SET_USERS_LIST = "SET_USERS_LIST";
export const SORT_BY_AGE = "SORT_BY_AGE";
export const SORT_BY_FIELD = "SORT_BY_FIELD";

export const addUser = (user, fieldAndDirection) => {
  return {
    type: ADD_USER,
    user,
    fieldAndDirection,
  };
};

export const deleteUser = (userId) => {
  return {
    type: DELETE_USER,
    userId,
  };
};

export const setUsersList = (users) => {
  return { type: SET_USERS_LIST, users };
};

export const sortByField = (field, direction) => {
  return {
    type: SORT_BY_FIELD,
    field,
    direction,
  };
};
