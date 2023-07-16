import { Quiz } from "@/models/quiz";
import { LangMode } from "@/models/langMode";
import { Codable, Sequence } from "@lemonaderoom/foundation";

export class QuizAnswer extends Codable<QuizAnswer> {
  constructor(
    readonly quiz: string,
    readonly answer: string,
    readonly selections: Sequence<string>
  ) {
    super();
  }

  static of(
    quiz: Quiz,
    selections: Sequence<Quiz>,
    mode: LangMode
  ): QuizAnswer {
    return new QuizAnswer(
      mode.takeQuizString(quiz),
      mode.takeAnswerString(quiz),
      selections.map((selection) => mode.takeAnswerString(selection))
    );
  }
}
