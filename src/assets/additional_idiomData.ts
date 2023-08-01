import { Quiz } from "@/models/quiz";
import { QuizCollection } from "@/models/quizCollection";
import { seq } from "@lemonaderoom/foundation";

export const additionalIdiomData = new QuizCollection(
  seq(
    new Quiz("as a result", "結果として"),
    new Quiz("keep on -ing", "〜し続ける"),
    new Quiz("along with", "〜とともに"),
    new Quiz("prefer,A to B", "BよりAを好む"),
    new Quiz("after all", "結局"),
    new Quiz("better off", "〜した方が良い"),
    new Quiz("goes well", "食べ物に合う"),
    new Quiz("in short", "〜に応じて"),
    new Quiz("put on hold", "保留する"),
    new Quiz("make sure", "確認する"),
    new Quiz("in the meantime", "遅れずに着いていく"),
    new Quiz("cheer up", "励ます")
  )
);
