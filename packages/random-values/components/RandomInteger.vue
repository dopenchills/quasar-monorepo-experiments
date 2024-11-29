<template>
  <div>
    <h2>Random Integer</h2>
    <h3>{{ randomInteger }}</h3>
    <q-btn
      @click="
        () => {
          randomInteger = generateRandomInteger(1, 100);
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
import { generateRandomInteger } from 'random-value-generator';

const randomInteger = ref(generateRandomInteger(1, 100));
</script>
