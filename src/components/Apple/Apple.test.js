import React from "react";
import Apple from "./Apple";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../../store/store";

afterEach(() => cleanup());

describe("Initial apple", () => {
  const coordinate = { x: 20, y: 30 };

  test("Apple correctly render", () => {
    render(
      <Provider store={store}>
        <Apple coordinate={coordinate} />
      </Provider>
    );

    expect(screen.getAllByTestId("apple")).not.toHaveLength(0);
  });
});
