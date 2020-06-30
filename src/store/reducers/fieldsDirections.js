import { SET_FIELDS_DIRECTIONS } from "../actions/fieldsDirections";

const initialState = {
  name: {
    isAscending: true,
  },
  email: {
    isAscending: null,
  },
  phoneNumber: {
    isAscending: null,
  },
  age: {
    isAscending: null,
  },
  gender: {
    isAscending: null,
  },
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FIELDS_DIRECTIONS:
      let newObject = {
        name: {
          isAscending: null,
        },
        email: {
          isAscending: null,
        },
        phoneNumber: {
          isAscending: null,
        },
        age: {
          isAscending: null,
        },
        gender: {
          isAscending: null,
        },
      };
      return {
        ...newObject,
        [action.field]: { isAscending: action.isAscending },
      };
    default:
      return state;
  }
};

export default dialogReducer;
