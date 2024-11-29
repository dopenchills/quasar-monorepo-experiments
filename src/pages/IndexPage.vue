<template>
  <q-page class="row items-center justify-evenly">
    <simple-counter />
    <quasar-counter />
    <!-- <unexported-counter /> -->
  </q-page>
</template>

<script setup lang="ts">
import { SimpleCounter, QuasarCounter } from 'counter';
// import { UnexportedCounter } from 'counter';
</script>
