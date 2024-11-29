<!-- This component will NOT be exported outside package -->

<template>
  <div>
    <h1>UnexportedCounter</h1>
    <h2>
      <b>{{ count }}</b>
    </h2>
    <button @click="increment">Increment</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);

function increment() {
  count.value++;
}
</script>
