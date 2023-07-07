<script setup lang="ts">
import {
  IonHeader,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonButtons,
} from "@ionic/vue";
import QuizView from "@/views/QuizView.vue";
</script>

<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button />
      </ion-buttons>
      <ion-title>Quiz</ion-title>
    </ion-toolbar>
  </ion-header>
  <QuizView />
</template>

<style lang="scss" scoped></style>
