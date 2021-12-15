/* eslint-disable no-undef */
import "@testing-library/jest-dom";

const add = (a, b) => a + b;
it("Add two values", () => {
  expect(add(2, 2)).toBe(4);
});
