import { createSlice } from "@reduxjs/toolkit";

export const shakeButton = createSlice({
  name: "shakeButton",
  initialState: {
    coordinates: [],
    shakeTreeState: false,
  },
  reducers: {
    // Shake Toggler
    shakeTreeToggler: (state) => {
      if (!state.shakeTreeState) {
        state.shakeTreeState = !state.shakeTreeState;
      }
    },
    // Shake done method
    shakeDone: (state) => {
      state.shakeTreeState = false;
    },
  },
});

export const { fusionCoordinates, shakeTreeToggler, shakeDone } =
  shakeButton.actions;

export default shakeButton.reducer;
