import { createSlice } from "@reduxjs/toolkit";

export const tree = createSlice({
  name: "tree",
  initialState: {
    apples: [],
    treeState: false,
    checkStatus: [],
    score: 0,
  },

  reducers: {
    // Apple Coordinate Generate
    appleCoordinateGenerator: (state) => {
      let coordinate = {};
      do {
        coordinate.y = Math.random() * 47;
        coordinate.x = Math.random() * 61;
      } while (coordinate.y < 10 || coordinate.x < 20);
      state.apples.push({ x: coordinate.x, y: coordinate.y, done: false });
    },
    // This method not used
    // checkAppleCoordinate: (state, action) => {
    //   state.apples.sort((a, b) => a.x - b.x);
    //   state.checkStatus = state.apples.filter((apple, index) => {
    //     if (state.apples[index + 1]) {
    //       if (state.apples[index + 1].x + 10 >= apple.x) {
    //         return apple.x;
    //       }
    //     }
    //     return state.apples.x;
    //   });
    // },
    // apple state setter & Calculate Score
    appleFallingDone: (state, action) => {
      state.apples[action.payload].done = true;
      state.score = state.apples.filter((apple) => apple.done === true).length;
    },
    // Remove Apple
    removeApple: (state, action) => {
      state.apples.splice([action.payload], 1);
    },
    // #TODO Just do this FALLING DOWN
    checkAppleFallingDone: (state) => {
      state.treeState =
        state.apples.filter((apple) => apple.done !== false).length !==
        state.apples.length
          ? true
          : false;
    },
  },
});

export const {
  appleCoordinateGenerator,
  removeApple,
  checkAppleCoordinate,
  appleFallingDone,
  checkAppleFallingDone,
} = tree.actions;

export const initTree = () => (dispatch) => {
  do {
    var randomApplePiece = Math.ceil(Math.random() * 8);
  } while (randomApplePiece < 2);

  for (let i = 0; i < randomApplePiece; i++) {
    dispatch(appleCoordinateGenerator());
  }
};

export default tree.reducer;
