import { expect, test } from "vitest";
import { exclude } from "../src/exclude.js";

test("test exclude", () => {
  expect(
    Array.from(exclude([1, null, 3, null, 5, null, 7], (x): x is null => x == null))
  ).toEqual(
    [1, 3, 5, 7]
  )
})