<script setup lang="ts">
import { IonSelect, IonSelectOption, IonIcon } from "@ionic/vue";
import { PropType } from "vue";
import { Sequence } from "@lemonaderoom/foundation";

export interface SelectOption {
  label: string;
  value: string;
}

defineProps({
  options: {
    type: Object as PropType<Sequence<SelectOption>>,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

function onChange(e: CustomEvent) {
  emit("update:modelValue", e.detail.value);
}
</script>

<template>
  <ion-select
    class="select"
    interface="action-sheet"
    @ionChange="onChange"
    :value="modelValue"
  >
    <div slot="label">
      <ion-icon :icon="icon" size="large" color="primary" />
    </div>
    <ion-select-option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
    >
      {{ option.label }}
    </ion-select-option>
  </ion-select>
</template>

<style scoped lang="scss">
.select {
  width: 200px;
}
</style>
