import { expect, test, describe, beforeEach } from "bun:test";

beforeEach(() => {
    console.log("running test.");
  });

describe("arithmetic", () => {
  test("2 + 2", () => {
    expect(2 + 2).toBe(4);
  });

  test("2 * 2", () => {
    expect(2 * 2).toBe(4);
  });
});
