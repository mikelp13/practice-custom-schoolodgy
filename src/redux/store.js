
// ========================== redux ===============================
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer, composeWithDevTools());

export default store;

// // ======================== redux toolkit ==============================
// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./reducers/rootReducer";

// const store = configureStore({
//   reducer: rootReducer,
// });

// export default store;