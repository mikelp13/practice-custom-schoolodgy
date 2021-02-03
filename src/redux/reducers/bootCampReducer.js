// ======================== redux ==============================
import {
  ADDNEWCAMP,
  DELETECAMP,
  SETALERT,
  SETFILTER,
} from "../constants/bootCampConstants";

const initialState = {
  bootCamps: [],
  filter: "",
  alert: false,
};

const bootCampReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case ADDNEWCAMP:
      if (
        state.bootCamps.some(
          (item) => item.campName === action.payload.campName
        )
      ) {
        return { ...state, alert: !state.alert };
      } else
        return { ...state, bootCamps: [...state.bootCamps, action.payload] };

    case DELETECAMP:
      return {
        ...state,
        bootCamps: [
          ...state.bootCamps.filter((item) => item.id !== action.payload),
        ],
      };
    case SETFILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case SETALERT:
      return {
        ...state,
        alert: !state.alert,
      };

    default:
      return state;
  }
};

export default bootCampReducer;

// ======================== redux toolkit ==============================
// import { createReducer } from "@reduxjs/toolkit";
// import {
//   addNewCamp,
//   deleteCamp,
//   setFilter,
//   setAlert,
// } from "../actions/bootCampActions";

// const initialState = {
//   bootCamps: [],
//   filter: "",
//   alert: false,
// };

// const bootCampReducer = createReducer(
//   { ...initialState },
//   {
//     [addNewCamp]: (state, action) => {
//       if (
//         state.bootCamps.some(
//           (item) => item.campName === action.payload.campName
//         )
//       ) {
//         return { ...state, alert: !state.alert };
//       } else
//         return { ...state, bootCamps: [...state.bootCamps, action.payload] };
//     },

//     [deleteCamp]: (state, action) => ({
//       ...state,
//       bootCamps: [
//         ...state.bootCamps.filter((item) => item.id !== action.payload),
//       ],
//     }),

//     [setFilter]: (state, action) => ({
//       ...state,
//       filter: action.payload,
//     }),

//     [setAlert]: (state) => ({
//       ...state,
//       alert: !state.alert,
//     }),
//   }
// );

// export default bootCampReducer;
