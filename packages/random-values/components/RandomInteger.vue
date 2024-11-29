<template>
  <div>
    <h1>Random Integer</h1>
    <p>{{ randomInteger }}</p>
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
