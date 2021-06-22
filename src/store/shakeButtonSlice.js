import { createSlice } from "@reduxjs/toolkit";

export const shakeButton = createSlice({
  name: "shakeButton",
  initialState: {
    coordinates: [],
    shakeTreeState: false,
  },
  reducers: {
    // Shake Toggler
    shakeTree: (state) => {
      state.shakeTreeState = true;
    },
    // Shake done method
    shakeDone: (state) => {
      state.shakeTreeState = false;
    },
  },
});

export const { fusionCoordinates, shakeTree, shakeDone } = shakeButton.actions;

export default shakeButton.reducer;
