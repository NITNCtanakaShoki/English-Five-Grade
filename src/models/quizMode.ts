import { QuizCollection } from "@/models/quizCollection";
import { wordData } from "@/assets/wordData";
import { idiomData } from "@/assets/idiomData";
import { seq, Sequence } from "@lemonaderoom/foundation";
import { additionalWordData } from "@/assets/additional_wordData";
import { additionalIdiomData } from "@/assets/additional_idiomData";

export class QuizMode {
  private constructor(
    readonly label: string,
    readonly value: string,
    readonly data: QuizCollection
  ) {}

  static readonly word = new QuizMode(
    "単語",
    "word",
    wordData.concat(additionalWordData)
  );
  static readonly idiom = new QuizMode(
    "イディオム",
    "idiom",
    idiomData.concat(additionalIdiomData)
  );
  static readonly additionalWord = new QuizMode(
    "追加された単語",
    "additional_word",
    additionalWordData
  );
  static readonly additionalIdiom = new QuizMode(
    "追加されたイディオム",
    "additional_idiom",
    additionalIdiomData
  );

  static readonly allCases: Sequence<QuizMode> = seq(
    this.word,
    this.idiom,
    this.additionalWord,
    this.additionalIdiom
  );

  static of(value: string): QuizMode {
    return this.allCases.find((mode) => mode.value === value).get;
  }
}
