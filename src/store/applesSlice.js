import { createSlice } from "@reduxjs/toolkit";

export const applesSlice = createSlice({
  name: "apples",
  initialState: {
    coordinates: [],
    shakeTree: false,
  },
  reducers: {
    fusionCoordinates: (state) => {},
    shakeTreeToggler: (state) => {
      if (!state.shakeTree) {
        state.shakeTree = !state.shakeTree;
      }
      setTimeout(() => (state.shakeTree = false), 3000);
    },
  },
});

export const { fusionCoordinates, shakeTreeToggler } = applesSlice.actions;

export default applesSlice.reducer;
