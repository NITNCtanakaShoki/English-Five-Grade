import { describe, test, expect } from "vitest";
import { QuizCollection } from "@/models/quizCollection";
import { Quiz } from "@/models/quiz";

describe("QuizCollection", () => {
  test("最初の要素を取得する", () => {
    const sut = new QuizCollection([
      new Quiz("hello", "こんにちは"),
      new Quiz("world", "世界"),
    ]);
    expect(sut.first).toEqual(new Quiz("hello", "こんにちは"));
  });

  test("最初の要素がなければundefinedを返す", () => {
    const sut = new QuizCollection([]);
    expect(sut.first).toBeUndefined();
  });

  test("要素がなければnonEmptyがfalseを返す", () => {
    const sut = new QuizCollection([]);
    expect(sut.nonEmpty).toBeFalsy();
  });

  test("要素があればnonEmptyがtrueを返す", () => {
    const sut = new QuizCollection([new Quiz("hello", "こんにちは")]);
    expect(sut.nonEmpty).toBeTruthy();
  });

  test("removeFirstで最初の要素を削除できる", () => {
    const sut = new QuizCollection([
      new Quiz("hello", "こんにちは"),
      new Quiz("world", "世界"),
    ]);

    const actual = sut.removeFirst;

    const expected = new QuizCollection([new Quiz("world", "世界")]);
    expect(actual).toEqual(expected);
  });

  test("removeFirstToLastで最初の要素を最後に移動できる", () => {
    const sut = new QuizCollection([
      new Quiz("hello", "こんにちは"),
      new Quiz("world", "世界"),
      new Quiz("language", "言語"),
    ]);

    const actual = sut.moveFirstToLast;

    const expected = new QuizCollection([
      new Quiz("world", "世界"),
      new Quiz("language", "言語"),
      new Quiz("hello", "こんにちは"),
    ]);
    expect(actual).toEqual(expected);
  });
});
