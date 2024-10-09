import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import UseDerivedEnv from "./UseDerivedEnv.js";

test("works", async () => {
  render(<UseDerivedEnv />);

  const date = screen.getByTestId("test");

  expect(date).toBeInTheDocument();
});

test("should throw", async () => {
  process.env.NODE_ENV = 'production';
  expect(() => render(<UseDerivedEnv />)).toThrow('This is a production error');
});