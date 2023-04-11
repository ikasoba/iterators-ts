import { expect, test } from "vitest";
import { forEach } from "../src/forEach.js";

test("test forEach", () => {
  const data = ["a", "b", "c", "d"]
  let dataIndex = 0
  forEach(data, (x, i) => {
    expect(data[dataIndex][0] == x && dataIndex == i).toBe(true)
    dataIndex++
  })
})