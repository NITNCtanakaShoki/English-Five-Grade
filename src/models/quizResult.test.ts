import { describe, test, expect } from "vitest";
import { QuizResult } from "@/models/quizResult";
import { Quiz } from "@/models/quiz";

describe("QuizCollection", () => {
  test("成功数を1つ上昇させる", () => {
    const quiz = new Quiz("hello", "こんにちは");
    const sut = QuizResult.success(quiz);

    const actual = sut.success;

    expect(actual.successCount).toBe(2);
  });

  test("失敗数を1つ上昇させる", () => {
    const quiz = new Quiz("hello", "こんにちは");
    const sut = QuizResult.success(quiz);

    const actual = sut.fail;

    expect(actual.successCount).toBe(1);
  });

  test("同じquizとisで比較するとtrueを返す", () => {
    const quiz = new Quiz("hello", "こんにちは");
    const sut = QuizResult.success(quiz);

    expect(sut.is(quiz)).toBeTruthy();
  });

  test("異なるquizとisで比較するとfalseを返す", () => {
    const quiz1 = new Quiz("hello", "こんにちは");
    const quiz2 = new Quiz("world", "世界");
    const sut = QuizResult.success(quiz1);

    expect(sut.is(quiz2)).toBeFalsy();
  });
});
