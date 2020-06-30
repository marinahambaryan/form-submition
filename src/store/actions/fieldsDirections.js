export const SET_FIELDS_DIRECTIONS = "SET_FIELDS_DIRECTIONS";

export const setFieldsDirections = (field, isAscending) => {
  return {
    type: SET_FIELDS_DIRECTIONS,
    field,
    isAscending,
  };
};
