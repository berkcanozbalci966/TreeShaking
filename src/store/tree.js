import { createSlice } from "@reduxjs/toolkit";

export const tree = createSlice({
  name: "tree",
  initialState: {
    apples: [],
  },
  reducers: {
    // Coordinate Generate
    appleCoordinateGenerator: (state) => {
      let coordinate = {};
      do {
        coordinate.y = Math.random() * 47;
        coordinate.x = Math.random() * 61;
      } while (coordinate.y < 10 || coordinate.x < 20);

      state.apples.push({ x: coordinate.x, y: coordinate.y });
    },
  },
});

export const { appleCoordinateGenerator } = tree.actions;

export default tree.reducer;
