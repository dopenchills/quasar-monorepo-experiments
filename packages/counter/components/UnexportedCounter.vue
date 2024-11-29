<!-- This component will NOT be exported outside package -->

<template>
  <div>
    <h2>UnexportedCounter</h2>
    <h3>
      <b>{{ count }}</b>
    </h3>
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
