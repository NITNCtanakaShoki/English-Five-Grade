<script setup lang="ts">
import { IonIcon, IonToggle } from "@ionic/vue";

defineProps({
  icon: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

function onToggle(e: CustomEvent) {
  emit("update:modelValue", e.detail.checked);
}
</script>

<template>
  <ion-toggle class="toggle" @ionChange="onToggle" :checked="modelValue">
    <div class="label">
      <ion-icon :icon="icon" size="large" color="primary" />
      <span class="text">{{ label }}</span>
    </div>
  </ion-toggle>
</template>

<style scoped lang="scss">
.toggle {
  .label {
    width: 134px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
