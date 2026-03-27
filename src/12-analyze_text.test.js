import { describe, test, expect } from "vitest";
import { analyze_text } from "./12-analyze_text";

describe("analyse_text", () => {
  test("Est-ce que les compteurs fonctionnent? Lettres", () => {
    expect(analyze_text("Coucoucombiendelettresyatil")).toEqual({
      letters: 27,
      words: 1,
      sentences: 0,
    });
  });
  test("Est-ce que les compteurs fonctionnent? Words", () => {
    expect(analyze_text("Coucou alors ca fonctionne ?")).toEqual({
      letters: 23,
      words: 4,
      sentences: 1,
    });
  });
  test("Est-ce que les compteurs fonctionnent? Sentences", () => {
    expect(
      analyze_text(
        "Coucou alors ca fonctionne ? ou est ce que ca fonctionne pas.",
      ),
    ).toEqual({
      letters: 48,
      words: 11,
      sentences: 2,
    });
  });
});
