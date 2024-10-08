import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import UseEnv from "./UseEnv.js";

test("works", async () => {
  render(<UseEnv />);

  const date = screen.getByTestId("test");

  expect(date).toBeInTheDocument();
});

test("should throw", async () => {
  process.env.NODE_ENV = 'production';
  expect(() => render(<UseEnv />)).toThrow('This is a production error');
});