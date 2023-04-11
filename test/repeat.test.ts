import { expect, test } from "vitest";
import { repeat } from "../src/repeat.js";

test("test repeat", () => {
  expect(
    Array.from(repeat(5, i => i ** 2))
  ).toEqual(
    [0, 1, 4, 9, 16]
  )
})