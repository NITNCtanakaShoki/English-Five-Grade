import { describe, test, expect } from "vitest";
import { QuizResultCollection } from "@/models/quizResultCollection";
import { Quiz } from "@/models/quiz";

describe("QuizCollection", () => {
  test("allSuccessCountで全てのクイズの合計成功回数", () => {
    const quiz1 = new Quiz("hello", "こんにちは");
    const quiz2 = new Quiz("world", "世界");
    const sut = new QuizResultCollection()
      .logSuccess(quiz1)
      .logSuccess(quiz1)
      .logSuccess(quiz1)
      .logSuccess(quiz2)
      .logSuccess(quiz2);

    expect(sut.allSuccessCount).toBe(5);
  });

  test("allFailCountで全てのクイズの合計失敗回数", () => {
    const quiz1 = new Quiz("hello", "こんにちは");
    const quiz2 = new Quiz("world", "世界");
    const sut = new QuizResultCollection()
      .logFail(quiz1)
      .logFail(quiz1)
      .logFail(quiz1)
      .logFail(quiz2)
      .logFail(quiz2)
      .logFail(quiz2);

    expect(sut.allFailCount).toBe(6);
  });

  test("allTryCountで全てのクイズの合計試行回数", () => {
    const quiz1 = new Quiz("hello", "こんにちは");
    const quiz2 = new Quiz("world", "世界");
    const sut = new QuizResultCollection()
      .logFail(quiz1)
      .logFail(quiz1)
      .logSuccess(quiz1)
      .logFail(quiz2)
      .logSuccess(quiz2)
      .logFail(quiz2)
      .logSuccess(quiz1);

    expect(sut.allTryCount).toBe(7);
  });

  test("failCountOfで指定したクイズの失敗回数を取得できる", () => {
    const quiz1 = new Quiz("hello", "こんにちは");
    const quiz2 = new Quiz("world", "世界");
    const sut = new QuizResultCollection()
      .logFail(quiz1)
      .logFail(quiz1)
      .logFail(quiz1)
      .logFail(quiz2)
      .logFail(quiz2);

    expect(sut.failCountOf(quiz1)).toBe(3);
  });

  test("successRateで成功率[%]", () => {
    const quiz1 = new Quiz("hello", "こんにちは");
    const quiz2 = new Quiz("world", "世界");
    const sut = new QuizResultCollection()
      .logFail(quiz2)
      .logSuccess(quiz1)
      .logSuccess(quiz1)
      .logFail(quiz2)
      .logSuccess(quiz1);

    expect(sut.successRate).toBe(60);
  });
});
