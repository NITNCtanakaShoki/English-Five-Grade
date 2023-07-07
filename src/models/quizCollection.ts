import { Quiz } from "@/models/quiz";
import { at } from "ionicons/icons";

export class QuizCollection {
  constructor(readonly values: readonly Quiz[]) {}

  get first(): Quiz | undefined {
    return this.values.at(0);
  }

  get nonEmpty(): boolean {
    return !this.isEmpty;
  }

  get removeFirst(): QuizCollection {
    if (this.isEmpty) return this;
    return this.slice(1);
  }

  get moveFirstToLast(): QuizCollection {
    if (this.isEmpty) return this;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.slice(1).add(this.first!);
  }

  selections(quiz: Quiz): readonly Quiz[] {
    const randoms = this.filter((q) => q.en !== quiz.en).shuffled;
    return new QuizCollection([quiz, ...randoms.slice(0, 3).values]).shuffled
      .values;
  }

  get shuffled(): QuizCollection {
    const shuffledArray = [...this.values];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return new QuizCollection(shuffledArray);
  }

  get count(): number {
    return this.values.length;
  }

  private add(quiz: Quiz): QuizCollection {
    return new QuizCollection(this.values.concat([quiz]));
  }

  private slice(start?: number, end?: number): QuizCollection {
    return new QuizCollection(this.values.slice(start, end));
  }

  private filter(predicate: (quiz: Quiz) => boolean): QuizCollection {
    return new QuizCollection(this.values.filter(predicate));
  }

  private get isEmpty(): boolean {
    return this.values.length === 0;
  }
}
