<script setup lang="ts">
import {
  IonContent,
  IonItem,
  IonRadio,
  IonRadioGroup,
  IonButton,
} from "@ionic/vue";
import { useSettingStore } from "@/state/setting";
import { useQuizStore } from "@/state/quiz";
import { computed, ref } from "vue";

const setting = useSettingStore();
const quiz = useQuizStore();

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const quizAnswer = computed(() => quiz.quizAnswer!);
const answer = ref<string | null>(null);

function onAnswer(event: CustomEvent) {
  answer.value = event.detail.value;
}

function classes(selection: string): readonly string[] {
  if (answer.value === null) return [];
  if (selection === quizAnswer.value.value?.answer) {
    return ["success"];
  }
  if (selection === answer.value) {
    return ["fail"];
  }
  return [];
}

function next(): void {
  if (answer.value === quizAnswer.value.value?.answer) {
    quiz.success();
  } else {
    quiz.fail();
  }
  answer.value = null;
}
</script>

<template>
  <ion-content class="ion-padding">
    <div class="gage">
      <span>失敗数: {{ quiz.failCountOfQuiz }}</span>
      <span>{{ setting.isInfinite ? "無限" : "1周" }}</span>
      <span>進捗: {{ quiz.allTryCount }} / {{ quiz.allQuizCount }}</span>
    </div>
    <div class="space" />
    <div class="quiz" v-if="quiz.hasQuiz">
      <h2>問題: {{ quizAnswer.get.quiz }}</h2>
      <div class="space" />
      <ion-radio-group :value="null" @ionChange="onAnswer">
        <ion-item
          v-for="selection in quizAnswer.get.selections"
          :key="selection"
        >
          <ion-radio :value="selection" justify="space-between">
            <div :class="classes(selection)">{{ selection }}</div>
          </ion-radio>
        </ion-item>
      </ion-radio-group>
      <div class="space" />
      <div class="btn-container">
        <ion-button @click="next" class="next-btn">Next</ion-button>
      </div>
    </div>
    <div v-else>正答率: {{ quiz.successRate }}%</div>
  </ion-content>
</template>

<style scoped lang="scss">
.gage {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.space {
  height: 20px;
}

.btn-container {
  display: flex;
  justify-content: flex-end;
}

.success {
  color: #2dd36f;
}

.fail {
  color: #eb445a;
}
</style>
