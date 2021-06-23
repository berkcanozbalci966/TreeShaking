import React from "react";
import Tree from "./Tree";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider, useDispatch } from "react-redux";
import store from "../../store/store";
import { initTree } from "../../store/tree";

afterEach(() => cleanup());

describe("Initial Tree", () => {
  test("Tree correctly render", () => {
    render(
      <Provider store={store}>
        <Tree />
      </Provider>
    );
    const tree = screen.getByTestId("tree");
    expect(tree).toBeInTheDocument();
  });
});

it("tree must be shaking", () => {
  render(
    <Provider store={store}>
      <Tree shakeTreeState={true} />
    </Provider>
  );
  const tree = screen.getByTestId("tree");
  expect(tree.firstChild).toHaveClass("animate__animated");
});

test("There must be apples on the tree", () => {
  render(
    <Provider store={store}>
      <Tree shakeTreeState={true} />
    </Provider>
  );

  const tree = screen.getByTestId("tree");
  const apples = screen.getAllByTestId("apple");
  expect(tree).toContainElement(apples[0]);
});
