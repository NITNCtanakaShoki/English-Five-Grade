import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { QuizCollection } from "@/models/quizCollection";
import { QuizResultCollection } from "@/models/quizResultCollection";
import { useSettingStore } from "@/state/setting";
import { QuizAnswer } from "@/models/QuizAnswer";

export const useQuizStore = defineStore("quiz", () => {
  const setting = useSettingStore();

  const collection = ref(new QuizCollection([]));
  const quiz = computed(() => collection.value.first);
  const failCount = computed(() =>
    quiz.value == null ? 0 : results.value.failCountOf(quiz.value)
  );
  const hasQuiz = computed(() => collection.value.nonEmpty);
  const results = ref(new QuizResultCollection());
  const quizAnswer = computed(() =>
    quiz.value == null
      ? null
      : QuizAnswer.of(
          quiz.value,
          setting.data.selections(quiz.value),
          setting.langMode
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
    quiz.value == null ? 0 : results.value.failCountOf(quiz.value)
  );

  const successRate = computed(() => results.value.successRate);

  function start(): void {
    collection.value = setting.data.shuffled;
    results.value = new QuizResultCollection();
  }

  function success(): void {
    if (quiz.value == null) return;
    results.value = results.value.logSuccess(quiz.value);
    collection.value = collection.value.removeFirst;
  }

  function fail(): void {
    if (quiz.value == null) return;
    results.value = results.value.logFail(quiz.value);
    if (setting.isInfinite) {
      collection.value = collection.value.moveFirstToLast;
    } else {
      collection.value = collection.value.removeFirst;
    }
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
