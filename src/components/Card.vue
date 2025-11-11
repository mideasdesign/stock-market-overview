<script setup lang="ts">
import { onMounted } from 'vue'
import { useApiData } from '../composables/useApiData'


const { data, loading, error, fetchData } = useApiData()

// Fetch on component mount
onMounted(() => {
  fetchData()
})
</script>

<template>
  <div class="card">
    <slot />
      <div v-if="loading">Loading...</div>
      <div v-else-if="error">{{ error }}</div>
      <div v-else>
        <!-- Use data here -->
        <pre>{{ data }}</pre>
      </div>
  </div>
</template>

<style scoped>
.card {
  background-color: #011F35;
  border-radius: 1rem;
  padding: 2rem 3rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
}
</style>
