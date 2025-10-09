<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="card">
    <div v-if="title" class="card-title">
      {{ title }}
    </div>
    <div class="card-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.card {
  background: blue;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  color: white;
}

.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 12px;
}

.card-content {
  font-size: 1rem;
}
</style>
