<template>
  <div>
    <h2>Random Integer</h2>
    <h3>{{ randomInteger }}</h3>
    <q-btn
      @click="
        () => {
          randomInteger = generate();
        }
      "
    >
      <q-icon name="refresh" />
      <span>Generate</span>
    </q-btn>
  </div>
</template>

<script setup lang="ts">
import { QBtn, QIcon } from 'quasar';
import { ref } from 'vue';

const generate = (): number => {
  return Math.floor(Math.random() * 100);
};

const randomInteger = ref(generate());
</script>
