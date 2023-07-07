import { Quiz } from "@/models/quiz";

export class QuizResult {
  constructor(
    readonly quiz: Quiz,
    readonly successCount: number = 0,
    readonly failCount: number = 0
  ) {}

  static success(quiz: Quiz): QuizResult {
    return new QuizResult(quiz, 1, 0);
  }

  static fail(quiz: Quiz): QuizResult {
    return new QuizResult(quiz, 0, 1);
  }

  get success(): QuizResult {
    return new QuizResult(this.quiz, this.successCount + 1, this.failCount);
  }

  get fail(): QuizResult {
    return new QuizResult(this.quiz, this.successCount, this.failCount + 1);
  }

  is(quiz: Quiz): boolean {
    return this.quiz === quiz;
  }
}
