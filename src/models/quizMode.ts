import { QuizCollection } from "@/models/quizCollection";
import { wordData } from "@/assets/wordData";
import { idiomData } from "@/assets/idiomData";
import { seq, Sequence } from "@lemonaderoom/foundation";

export class QuizMode {
  private constructor(
    readonly label: string,
    readonly value: string,
    readonly data: QuizCollection
  ) {}

  static readonly word = new QuizMode("単語", "word", wordData);
  static readonly idiom = new QuizMode("イディオム", "idiom", idiomData);

  static readonly allCases: Sequence<QuizMode> = seq(this.word, this.idiom);

  static of(value: string): QuizMode {
    return this.allCases.find((mode) => mode.value === value).get;
  }
}
