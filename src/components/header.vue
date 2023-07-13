<script setup>
import { useCurrentTime } from "../utils/useCurrentTime";
const { currentTime } = useCurrentTime();
</script>

<template>
  <header class="header">
    <h1 class="title">Filipe Santos</h1>
    <div class="time">{{ currentTime }}</div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  border-bottom: solid 1px gray;
}
.title {
  font-size: 1.4rem;
}
.time {
  font-weight: 600;
}
</style>