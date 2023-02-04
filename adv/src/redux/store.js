import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./counterSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";

import { myCustomApiService } from "../api";

const rootPersistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  todoReducer: todoReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
export default configureStore({
  reducer: {
    userRole: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: myCustomApiService,
      },
      serializableCheck: false,
    }),
});
