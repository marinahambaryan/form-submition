import { SET_SORT_FIELD_AND_DIRECTION } from "../actions/sortFieldAndDirection";

const initialState = {
  field: "name",
  direction: 1,
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT_FIELD_AND_DIRECTION:
      return {
        field: action.field,
        direction: action.direction,
      };
    default:
      return state;
  }
};

export default dialogReducer;
