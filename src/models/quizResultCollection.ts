import { QuizResult } from "@/models/quizResult";
import { Quiz } from "@/models/quiz";

export class QuizResultCollection {
  constructor(private readonly values: readonly QuizResult[] = []) {}

  logSuccess(quiz: Quiz): QuizResultCollection {
    if (this.isExistsQuiz(quiz)) {
      return new QuizResultCollection(
        this.values.map((result) => (result.is(quiz) ? result.success : result))
      );
    }
    return this.add(QuizResult.success(quiz));
  }

  logFail(quiz: Quiz): QuizResultCollection {
    if (this.isExistsQuiz(quiz)) {
      return new QuizResultCollection(
        this.values.map((result) => (result.is(quiz) ? result.fail : result))
      );
    }
    return this.add(QuizResult.fail(quiz));
  }

  get successRate(): number {
    if (this.allTryCount === 0) return 0;
    return Math.floor((this.allSuccessCount / this.allTryCount) * 100);
  }

  failCountOf(quiz: Quiz): number {
    const result = this.findByQuiz(quiz);
    if (result == null) return 0;
    return result.failCount;
  }

  get allTryCount(): number {
    return this.values.reduce(
      (sum, result) => sum + result.successCount + result.failCount,
      0
    );
  }

  get allSuccessCount(): number {
    return this.values.reduce((sum, result) => sum + result.successCount, 0);
  }

  get allFailCount(): number {
    return this.values.reduce((sum, result) => sum + result.failCount, 0);
  }

  private add(result: QuizResult): QuizResultCollection {
    return new QuizResultCollection(this.values.concat([result]));
  }

  private isExistsQuiz(quiz: Quiz): boolean {
    return this.findByQuiz(quiz) != null;
  }

  private findByQuiz(quiz: Quiz): QuizResult | undefined {
    return this.values.find((result) => result.is(quiz));
  }
}
