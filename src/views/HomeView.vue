<script setup lang="ts">
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonNavLink,
} from "@ionic/vue";
import {
  infiniteOutline,
  languageOutline,
  analyticsOutline,
} from "ionicons/icons";
import SettingToggle from "@/components/SettingToggle.vue";
import SettingSelect from "@/components/SettingSelect.vue";
import QuizPage from "@/routes/QuizPage.vue";
import { QuizMode } from "@/models/quizMode";
import { LangMode } from "@/models/langMode";
import { useSettingStore } from "@/state/setting";
import { useQuizStore } from "@/state/quiz";

const setting = useSettingStore();
const quiz = useQuizStore();
</script>

<template>
  <ion-content :fullscreen="true">
    <ion-header collapse="condense">
      <ion-toolbar>
        <ion-title size="large">Home</ion-title>
      </ion-toolbar>
    </ion-header>

    <div class="container">
      <div class="setting">
        <SettingSelect
          v-model="setting.quizModeValue"
          :options="QuizMode.allCases"
          :icon="analyticsOutline"
        />
        <SettingSelect
          v-model="setting.langModeValue"
          :options="LangMode.allCases"
          :icon="languageOutline"
        />
        <SettingToggle
          label="無限再生"
          v-model="setting.isInfinite"
          :icon="infiniteOutline"
        />
      </div>
      <div class="spacer" />
      <ion-nav-link router-direction="forward" :component="QuizPage">
        <ion-button @click="quiz.start">START</ion-button>
      </ion-nav-link>
    </div>
  </ion-content>
</template>

<style lang="scss" scoped>
.container {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;

  .setting {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .spacer {
    height: 50px;
  }

  strong {
    font-size: 20px;
    line-height: 26px;
  }

  p {
    font-size: 16px;
    line-height: 22px;

    color: #8c8c8c;

    margin: 0;
  }

  a {
    text-decoration: none;
  }
}
</style>
