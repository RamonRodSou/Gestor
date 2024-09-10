import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/user";

const store = configureStore({
  reducer: {
    users: userSlice.reducer 
  }
});

export default store;
