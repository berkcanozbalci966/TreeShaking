import React from "react";
import ShakeButton from "./ShakeButton";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../../store/store";

describe("Initial Button", () => {
  test("Component correctly render", () => {
    render(
      <Provider store={store}>
        <ShakeButton />
      </Provider>
    );
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

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
