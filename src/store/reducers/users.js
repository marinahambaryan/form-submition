import {
  ADD_USER,
  DELETE_USER,
  SET_USERS_LIST,
  SORT_BY_AGE,
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

const findIndexOfElement = (arr, elem) => {
  let start = 0,
    end = arr.length - 1;
  let pos = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid].name === elem.name) {
      pos = mid;
      break;
    } else if (arr[mid].name < elem.name) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  if (pos === -1) {
    if (arr[0].name > elem.name) {
      return 0;
    }
    return arr.length;
  } else {
    while (arr[pos].name === elem.name && pos < arr.length) {
      if (arr[pos].email > elem.email) {
        break;
      }
      ++pos;
    }
  }
  return pos;
};

const usersReducer = (state = initialState, action) => {
  const usersCopy = [...state.users];
  switch (action.type) {
    case SET_USERS_LIST:
      const users = sortUsers(action.users);
      return { ...state, users };

    case ADD_USER:
      if (usersCopy.length > 0) {
        let myUserIndex = findIndexOfElement(usersCopy, action.user);
        usersCopy.splice(myUserIndex, 0, action.user);
      } else {
        usersCopy.push(action.user);
      }
      return { ...state, users: usersCopy };

    case DELETE_USER:
      const userIndex = usersCopy.findIndex(
        (user) => user.id === action.userId
      );
      usersCopy.splice(userIndex, 1);
      return { ...state, users: usersCopy };

    case SORT_BY_AGE:
      usersCopy.sort((a, b) => (a.age - b.age) * action.direction);
      return { ...state, users: usersCopy };
    default:
      return state;
  }
};

export default usersReducer;
