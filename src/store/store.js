import { configureStore } from "@reduxjs/toolkit";
import shakeButtonReducer from "./shakeButtonSlice";
import treeReducer from "./tree";
export default configureStore({
  reducer: {
    shakeButton: shakeButtonReducer,
    tree: treeReducer,
  },
});
