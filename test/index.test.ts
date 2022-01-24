import { describe, test, expect } from "vitest";
import foo from "../src/index";

describe("Test starter", () => {
  test("Should be string", () => {
    expect(foo).toBe("bar");
  });
});
