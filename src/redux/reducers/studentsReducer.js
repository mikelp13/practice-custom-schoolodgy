import { ADDNEWSTUDENT, GETSTUDENTS } from "../constants/studentsConstants";

export const studentsReducer = (state = { items: [] }, action) => {
  switch (action.type) {
    case ADDNEWSTUDENT:
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case GETSTUDENTS:
      return {
        ...state,
        items: [...action.payload],
      };

    default:
      return state;
  }
};
