import { suite, test, expect } from "vitest";
import {
  myIncludes,
  myJoin,
  myObjectKeys,
  myObjectEntries,
  myIndexOf,
  myStartsWith,
  myRepeat,
} from "./9-myJs";

suite("myJs", () => {
  test("myIncludes", () => {
    expect(myIncludes(["a", "b", "c"], "b")).toBe(true);
    expect(myIncludes(["a", "b", "c"], "d")).toBe(false);
    expect(myIncludes([], "a")).toBe(false);
    expect(myIncludes(["hello"], "hello")).toBe(true);
    expect(myIncludes(["1", "2", "3"], "2")).toBe(true);
  });

  // TODO: test myIndexOf
  test("myIndexOf", () => {
    expect(myIndexOf(["un", "deux", "trois", "quatre"], "trois")).toBe(2);
    expect(myIndexOf(["un", "deux", "trois", "quatre"], "cinq")).toBe(-1);
  });
  // TODO: test myStartsWith
  test("myStartsWith", () => {
    expect(myStartsWith("bonjour", "bon")).toBe(true);
    expect(myStartsWith("Shalut", "Sal")).toBe(false);
  });

  // TODO: test myRepeat
  test("myRepeat", () => {
    expect(myRepeat("Yeah", 2)).toBe("YeahYeah");
    expect(myRepeat("Ha", 5)).toBe("HaHaHaHaHa");
  });

  test("myJoin", () => {
    expect(myJoin(["a", "b", "c"], "-")).toBe("a-b-c");
    expect(myJoin(["hello", "world"], " ")).toBe("hello world");
    expect(myJoin([], ",")).toBe("");
    expect(myJoin(["x"], ",")).toBe("x");
    expect(myJoin(["", ""], ",")).toBe(",");
  });

  test("myObjectKeys", () => {
    expect(myObjectKeys({ a: 1, b: 2 })).toEqual(["a", "b"]);
    expect(myObjectKeys({})).toEqual([]);
    expect(myObjectKeys({ x: undefined, y: null })).toEqual(["x", "y"]);
  });

  // TODO: test myObjectEntries
});
