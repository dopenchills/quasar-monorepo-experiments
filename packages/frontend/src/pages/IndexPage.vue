<template>
  <q-page class="row items-center justify-evenly">
    <simple-counter />
    <quasar-counter />
    <!-- <unexported-counter /> -->

    <random-integer />
  </q-page>
</template>

<script setup lang="ts">
import { SimpleCounter, QuasarCounter } from 'counter';
import { RandomInteger } from 'random-values';
// import { UnexportedCounter } from 'counter';
</script>
