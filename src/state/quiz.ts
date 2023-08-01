import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { QuizCollection } from "@/models/quizCollection";
import { QuizResultCollection } from "@/models/quizResultCollection";
import { useSettingStore } from "@/state/setting";
import { QuizAnswer } from "@/models/QuizAnswer";

export const useQuizStore = defineStore("quiz", () => {
  const setting = useSettingStore();

  const collection = ref(new QuizCollection());
  const quiz = computed(() => collection.value.first);
  const failCount = computed(() =>
    quiz.value.map((q) => results.value.failCountOf(q)).getOrElse(0)
  );
  const hasQuiz = computed(() => collection.value.nonEmpty);
  const results = ref(new QuizResultCollection());
  const quizAnswer = computed(() =>
    quiz.value.map((q) =>
      QuizAnswer.of(q, setting.allData.selections(q), setting.langMode)
    )
  );

  const allQuizCount = computed(() => {
    if (setting.isInfinite) {
      return setting.data.count + results.value.allFailCount;
    } else {
      return setting.data.count;
    }
  });

  const allTryCount = computed(() => results.value.allTryCount);

  const failCountOfQuiz = computed(() =>
    quiz.value.map((q) => results.value.failCountOf(q)).getOrElse(0)
  );

  const successRate = computed(() => results.value.successRate);

  function start(): void {
    collection.value = setting.data.shuffled;
    results.value = new QuizResultCollection();
  }

  function success(): void {
    quiz.value.map((q) => {
      results.value = results.value.logSuccess(q);
      collection.value = collection.value.removeFirst;
    });
  }

  function fail(): void {
    quiz.value.map((q) => {
      results.value = results.value.logFail(q);
      if (setting.isInfinite) {
        collection.value = collection.value.moveFirstToLast;
      } else {
        collection.value = collection.value.removeFirst;
      }
    });
  }

  return {
    quiz,
    failCount,
    hasQuiz,
    success,
    fail,
    start,
    quizAnswer,
    allQuizCount,
    allTryCount,
    failCountOfQuiz,
    successRate,
  };
});
