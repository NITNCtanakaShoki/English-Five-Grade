<script setup lang="ts">
import { IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/vue";
import HomeView from "@/views/HomeView.vue";
</script>

<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <HomeView />
  </ion-page>
</template>

<style lang="scss" scoped></style>
