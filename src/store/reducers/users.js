import {
  ADD_USER,
  DELETE_USER,
  SET_USERS_LIST,
  SORT_BY_AGE,
  SORT_BY_FIELD,
} from "../actions/users";

const initialState = {
  users: [],
};

const sortUsers = (users) => {
  return users.sort((u1, u2) => {
    if (u1.name > u2.name) return 1;
    if (u1.name < u2.name) return -1;

    if (u1.email > u2.email) return 1;
    if (u1.email < u2.email) return -1;

    if (u1.phoneNumber > u2.phoneNumber) return 1;
    if (u1.phoneNumber < u2.phoneNumber) return -1;

    if (u1.age > u2.age) return 1;
    if (u1.age < u2.age) return -1;

    if (u1.gender > u2.gender) return 1;
    if (u1.gender < u2.gender) return -1;
  });
};

const findIndexOfObj = function (arr, obj, field, direction) {
  for (let i = 0; i <= arr.length; i++) {
    if (direction === 1) {
      if (
        obj[field] < arr[i][field] ||
        (obj[field] === arr[i][field] && obj.email < arr[i].email)
      ) {
        return i;
      }
    } else {
      if (
        obj[field] > arr[i][field] ||
        (obj[field] === arr[i][field] && obj.email > arr[i].email)
      ) {
        return i;
      }
    }
  }
};

const usersReducer = (state = initialState, action) => {
  const usersCopy = [...state.users];
  switch (action.type) {
    case SET_USERS_LIST:
      const users = sortUsers(action.users);
      return { ...state, users };

    case ADD_USER:
      if (usersCopy.length > 0) {
        let myUserIndex = findIndexOfObj(
          usersCopy,
          action.user,
          action.fieldAndDirection.field,
          action.fieldAndDirection.direction
        );
        usersCopy.splice(myUserIndex, 0, action.user);
      } else {
        usersCopy.push(action.user);
      }
      localStorage.setItem("users", JSON.stringify(usersCopy));
      return { ...state, users: usersCopy };

    case DELETE_USER:
      const userIndex = usersCopy.findIndex(
        (user) => user.id === action.userId
      );
      usersCopy.splice(userIndex, 1);
      localStorage.setItem("users", JSON.stringify(usersCopy));
      return { ...state, users: usersCopy };

    case SORT_BY_AGE:
      usersCopy.sort((a, b) => (a.age - b.age) * action.direction);
      return { ...state, users: usersCopy };

    case SORT_BY_FIELD:
      usersCopy.sort((a, b) => {
        let firstMainField = a[action.field];
        let secondMainField = b[action.field];
        if (firstMainField === secondMainField) {
          return a.email > b.email ? action.direction : -action.direction;
        }
        return a[action.field] > b[action.field]
          ? action.direction
          : -action.direction;
      });
      return { ...state, users: usersCopy };
    default:
      return state;
  }
};

export default usersReducer;
