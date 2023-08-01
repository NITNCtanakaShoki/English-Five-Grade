import { Quiz } from "@/models/quiz";
import {
  Codable,
  from,
  Optional,
  seq,
  Sequence,
} from "@lemonaderoom/foundation";

export class QuizCollection extends Codable<QuizCollection> {
  constructor(readonly values: Sequence<Quiz> = seq()) {
    super();
  }

  get first(): Optional<Quiz> {
    return this.values.at(0);
  }

  get nonEmpty(): boolean {
    return this.values.nonEmpty;
  }

  get removeFirst(): QuizCollection {
    if (this.isEmpty) return this;
    return new QuizCollection(this.values.remove(0));
  }

  get moveFirstToLast(): QuizCollection {
    if (this.isEmpty) return this;
    return this.removeFirst.add(this.first.get);
  }

  selections(quiz: Quiz): Sequence<Quiz> {
    const randoms = this.filter((q) => q.en !== quiz.en).shuffled;
    return new QuizCollection(seq([quiz, ...randoms.slice(0, 3).values]))
      .shuffled.values;
  }

  get shuffled(): QuizCollection {
    return new QuizCollection(this.values.shuffled);
  }

  get count(): number {
    return this.values.count;
  }

  concat(other: QuizCollection): QuizCollection {
    return new QuizCollection(this.values.concat(other.values));
  }

  private add(quiz: Quiz): QuizCollection {
    return new QuizCollection(this.values.append(quiz));
  }

  private slice(start = 0, end: number = this.count): QuizCollection {
    return new QuizCollection(this.values.slice(from(start).until(end)));
  }

  private filter(predicate: (quiz: Quiz) => boolean): QuizCollection {
    return new QuizCollection(this.values.filter(predicate));
  }

  private get isEmpty(): boolean {
    return this.values.isEmpty;
  }
}
