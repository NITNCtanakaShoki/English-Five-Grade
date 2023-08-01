import { Quiz } from "@/models/quiz";
import { QuizCollection } from "@/models/quizCollection";
import { seq } from "@lemonaderoom/foundation";

export const additionalWordData = new QuizCollection(
  seq(
    new Quiz("hold", "持つ"),
    new Quiz("taste", "味わう"),
    new Quiz("awful", "不味い"),
    new Quiz("rarely", "滅多にない"),
    new Quiz("brand-name", "ブランドの"),
    new Quiz("common", "一般的な、ありふれた"),
    new Quiz("local", "地元の"),
    new Quiz("everyday", "日常の、毎日の"),
    new Quiz("occasions", "機会"),
    new Quiz("traditional", "伝統的な"),
    new Quiz("continent", "大陸"),
    new Quiz("increase", "増える、増やす"),
    new Quiz("district", "地区"),
    new Quiz("own", "所有する"),
    new Quiz("prefer", "より好む"),
    new Quiz("profits", "利益"),
    new Quiz("positive", "前向きな"),
    new Quiz("similar", "同様の、よく似た"),
    new Quiz("spend", "費う、使う"),
    new Quiz("costly", "高価な"),
    new Quiz("consumption", "消費"),
    new Quiz("dramatically", "劇的に"),
    new Quiz("essential", "必要不可欠な"),
    new Quiz("outstanding", "実に優れた"),
    new Quiz("stable", "安定した")
  )
);
