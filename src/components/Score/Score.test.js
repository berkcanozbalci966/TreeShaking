import React from "react";
import Score from "./Score";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("İnitial score", () => {
  test("Component correctly render", () => {
    render(<Score score={0} />);
    expect(screen.getByText(/SCORE/i)).toBeInTheDocument();
  });

  test("Default score 0", () => {
    render(<Score />);
    expect(screen.getByText("SCORE : 0")).toBeInTheDocument();
  });

  test("Score must be 0", () => {
    render(<Score score={0} />);
    expect(screen.getByText("SCORE : 0")).toBeInTheDocument();
  });
});
