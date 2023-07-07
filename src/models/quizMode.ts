import { QuizCollection } from "@/models/quizCollection";
import { wordData } from "@/assets/wordData";
import { idiomData } from "@/assets/idiomData";

export class QuizMode {
  private constructor(
    readonly label: string,
    readonly value: string,
    readonly data: QuizCollection
  ) {}

  static readonly word = new QuizMode("単語", "word", wordData);
  static readonly idiom = new QuizMode("イディオム", "idiom", idiomData);

  static readonly allCases: readonly QuizMode[] = [this.word, this.idiom];

  static of(value: string): QuizMode {
    const found = this.allCases.find((mode) => mode.value === value);
    if (found == null) throw new Error(`LangMode.of(${value}) is null`);
    return found;
  }
}
