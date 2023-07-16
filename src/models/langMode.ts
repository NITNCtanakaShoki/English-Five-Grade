import { Quiz } from "@/models/quiz";
import { seq, Sequence } from "@lemonaderoom/foundation";

export class LangMode {
  private constructor(
    readonly label: string,
    readonly value: string,
    readonly takeQuizString: (quiz: Quiz) => string,
    readonly takeAnswerString: (quiz: Quiz) => string
  ) {}

  static readonly ja2en = new LangMode(
    "日本語 → 英語",
    "ja2en",
    (q) => q.ja,
    (q) => q.en
  );
  static readonly en2ja = new LangMode(
    "英語 → 日本語",
    "en2ja",
    (q) => q.en,
    (q) => q.ja
  );

  static readonly allCases: Sequence<LangMode> = seq(this.ja2en, this.en2ja);

  static of(value: string): LangMode {
    return this.allCases.find((mode) => mode.value === value).get;
  }
}
