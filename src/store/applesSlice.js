import { createSlice } from "@reduxjs/toolkit";

export const applesSlice = createSlice({
  name: "apples",
  initialState: {
    coordinates: [],
  },
  reducers: {
    fusionCoordinates: (state) => {},
    generateCoordinates: (coordinates) => {
      if (coordinates === "y") {
        let randomY = Math.random() * 53;
        return randomY < 47 && randomY > 15 ? randomY : randomStart("y");
      } else {
        let randomY = Math.random() * 61;
        return randomY < 61 && randomY > 20 ? randomY : randomStart("y");
      }
    },
  },
});
