import { QuizCollection } from "@/models/quizCollection";
import { Quiz } from "@/models/quiz";
import { seq } from "@lemonaderoom/foundation";

export const idiomData = new QuizCollection(
  seq(
    new Quiz("be exposed to", "〜に晒される"),
    new Quiz("pour out of 〜", "~から溢れ出る"),
    new Quiz("put on hold", "保留する"),
    new Quiz("interaction with 〜", "誰々との交流"),
    new Quiz("come up with", "思いつく"),
    new Quiz("filled with", "〜で満たされた"),
    new Quiz("provided A with B", "AにBを提供する,与える"),
    new Quiz("provide for 〜", "〜を養う"),
    new Quiz("in order to", "〜するために"),
    new Quiz("in the meantime", "一方"),
    new Quiz("keep up with", "遅れずについていく"),
    new Quiz("in favor of", "〜に賛成している"),
    new Quiz("depend on", "〜に応じて、〜に従って"),
    new Quiz("be likely to", "〜する傾向がある"),
    new Quiz("be required to do", "〜をすることを必要とされる"),
    new Quiz("be forced to do", "〜することを強いられる"),
    new Quiz("no longer", "もはや〜ない"),
    new Quiz("put into action", "〜を実行する"),
    new Quiz("rely on", "頼る、依存する")
  )
);
