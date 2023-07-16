import { QuizResult } from "@/models/quizResult";
import { Quiz } from "@/models/quiz";
import { Optional, seq, Sequence } from "@lemonaderoom/foundation";

export class QuizResultCollection {
  constructor(private readonly values: Sequence<QuizResult> = seq()) {}

  logSuccess(quiz: Quiz): QuizResultCollection {
    if (this.isExistsQuiz(quiz)) {
      const results = this.values.map((result) =>
        result.is(quiz) ? result.success : result
      );
      return new QuizResultCollection(results);
    }
    return this.add(QuizResult.success(quiz));
  }

  logFail(quiz: Quiz): QuizResultCollection {
    if (this.isExistsQuiz(quiz)) {
      const results = this.values.map((result) =>
        result.is(quiz) ? result.fail : result
      );
      return new QuizResultCollection(results);
    }
    return this.add(QuizResult.fail(quiz));
  }

  get successRate(): number {
    if (this.allTryCount === 0) return 0;
    return Math.floor((this.allSuccessCount / this.allTryCount) * 100);
  }

  failCountOf(quiz: Quiz): number {
    return this.findByQuiz(quiz)
      .map((result) => result.failCount)
      .getOrElse(0);
  }

  get allTryCount(): number {
    return this.values.reduce(0, (sum, result) => sum + result.tryCount);
  }

  get allSuccessCount(): number {
    return this.values.reduce(0, (sum, result) => sum + result.successCount);
  }

  get allFailCount(): number {
    return this.values.reduce(0, (sum, result) => sum + result.failCount);
  }

  private add(result: QuizResult): QuizResultCollection {
    return new QuizResultCollection(this.values.append(result));
  }

  private isExistsQuiz(quiz: Quiz): boolean {
    return this.findByQuiz(quiz).isDefined;
  }

  private findByQuiz(quiz: Quiz): Optional<QuizResult> {
    return this.values.find((result) => result.is(quiz));
  }
}
