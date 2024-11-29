<template>
  <div>
    <h2>QuasarCounter</h2>
    <h3>
      <b>{{ count }}</b>
    </h3>
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
