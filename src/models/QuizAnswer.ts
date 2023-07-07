import { Quiz } from "@/models/quiz";
import { LangMode } from "@/models/langMode";

export class QuizAnswer {
  constructor(
    readonly quiz: string,
    readonly answer: string,
    readonly selections: readonly string[]
  ) {}

  static of(
    quiz: Quiz,
    selections: readonly Quiz[],
    mode: LangMode
  ): QuizAnswer {
    return new QuizAnswer(
      mode.takeQuizString(quiz),
      mode.takeAnswerString(quiz),
      selections.map((selection) => mode.takeAnswerString(selection))
    );
  }
}
