import { Codable } from "@lemonaderoom/foundation";

export class Quiz extends Codable<Quiz> {
  constructor(readonly en: string, readonly ja: string) {
    super();
  }
}
