<template>
  <div>
    <h1>QuasarCounter</h1>
    <h2>
      <b>{{ count }}</b>
    </h2>
    <q-btn @click="increment">Increment</q-btn>
  </div>
</template>

<script setup lang="ts">
import { QBtn } from 'quasar';
import { ref } from 'vue';

const count = ref(0);

function increment() {
  count.value++;
}
</script>
