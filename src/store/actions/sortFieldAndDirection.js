export const SET_SORT_FIELD_AND_DIRECTION = "SET_SORT_FIELD_ANDDIRECTION";

export const setSortFieldAndDirection = (field, direction) => {
  return {
    type: SET_SORT_FIELD_AND_DIRECTION,
    field,
    direction,
  };
};
