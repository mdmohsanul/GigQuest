import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "../feature/jobSlice";
import navbarSlice from "../feature/navbarSlice";

const store = configureStore({
  reducer: {
    jobs: jobSlice,
    navbar: navbarSlice,
  },
});

export default store;
