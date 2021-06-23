import React from "react";
import ShakeButton from "./ShakeButton";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../../store/store";

afterEach(() => cleanup());

describe("Initial button", () => {
  test("Button correctly render", () => {
    render(
      <Provider store={store}>
        <ShakeButton />
      </Provider>
    );
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});

describe("Button click", () => {
  test("Fire click event & disabled button", () => {
    render(
      <Provider store={store}>
        <ShakeButton />
      </Provider>
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(button).toBeDisabled();
  });
});
