import { expect, test } from "vitest";
import { range } from "../src/range.js";

test("test range", () => {
  expect(
    Array.from(range(4))
  ).toEqual(
    [0, 1, 2, 3]
  )
  
  expect(
    Array.from(range(6, 11))
  ).toEqual(
    [6, 7, 8, 9, 10]
  )
})