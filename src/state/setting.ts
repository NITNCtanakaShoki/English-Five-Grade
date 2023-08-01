import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { QuizMode } from "@/models/quizMode";
import { LangMode } from "@/models/langMode";

export const useSettingStore = defineStore("setting", () => {
  const isInfinite = ref(false);

  const quizModeValue = ref(QuizMode.word.value);
  const quizMode = computed(() => QuizMode.of(quizModeValue.value));

  const langModeValue = ref(LangMode.ja2en.value);
  const langMode = computed(() => LangMode.of(langModeValue.value));

  const data = computed(() => quizMode.value.data);
  const allData = computed(() => quizMode.value.allData);

  return {
    isInfinite,
    quizModeValue,
    quizMode,
    langModeValue,
    langMode,
    data,
    allData,
  };
});
