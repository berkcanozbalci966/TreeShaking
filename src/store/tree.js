import store from "./store";
import { createSlice } from "@reduxjs/toolkit";

export const tree = createSlice({
  name: "tree",
  initialState: {
    apples: [],
    checkStatus: [],
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

    checkAppleCoordinate: (state, action) => {
      state.apples.sort((a, b) => a.x - b.x);
      state.checkStatus = state.apples.filter((apple, index) => {
        if (state.apples[index + 1]) {
          console.log("filter", state.apples[index + 1].x + 2, apple.x);
          if (state.apples[index + 1].x + 10 >= apple.x) {
            return apple.x;
          }
        }
        return state.apples.x;
      });
    },

    removeApple: (state, action) => {
      state.apples.splice([action.payload], 1);
      console.log("store", state);
    },
  },
});

export const { appleCoordinateGenerator, removeApple, checkAppleCoordinate } =
  tree.actions;

export default tree.reducer;
