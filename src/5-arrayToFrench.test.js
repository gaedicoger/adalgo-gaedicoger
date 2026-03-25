import { test, expect, describe } from "vitest";
import { arrayToFrench } from "./5-arrayToFrench";

describe("arrayToFrench", () => {
  test("S'il y a 3 mots ou plus", () => {
    expect(arrayToFrench(["un", "deux", "trois", "soleil"])).toBe(
      "un, deux, trois et soleil",
    );
  });

  test("S'il y a 2 mots", () => {
    expect(arrayToFrench(["un", "deux"])).toBe("un et deux");
  });

  test("S'il y a 1 mot", () => {
    expect(arrayToFrench(["un"])).toBe("un");
  });
});
