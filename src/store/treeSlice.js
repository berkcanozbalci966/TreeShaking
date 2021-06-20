import { createSlice } from "@reduxjs/toolkit";

export const treeSlice = createSlice({
  name: "tree",
  initialState: {
    coordinates: [],
    shakeTreeState: false,
  },
  reducers: {
    fusionCoordinates: (state) => {},
    shakeTreeToggler: (state) => {
      if (!state.shakeTreeState) {
        state.shakeTreeState = !state.shakeTreeState;
      }
    },
    shakeDone: (state) => {
      state.shakeTreeState = false;
    },
  },
});

export const { fusionCoordinates, shakeTreeToggler, shakeDone } =
  treeSlice.actions;

export default treeSlice.reducer;
