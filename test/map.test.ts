import { expect, test } from "vitest";
import { map } from "../src/map.js";

test("test map", () => {
  const data = [0, 1, 2, 3]
  expect(
    Array.from(map(data, x => String.fromCharCode("a".charCodeAt(0) + x)))
  ).toEqual(
    ["a", "b", "c", "d"]
  )
})