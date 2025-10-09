<script setup lang="ts">
import CardComponent from './components/CardComponent.vue'
</script>

<template>
  <div class="app-container">
    <h1>Stock Market Overview</h1>

    <CardComponent title="Beispiel Card 1">
      <p>Dies ist der Inhalt der ersten Card.</p>
    </CardComponent>

    <CardComponent title="Beispiel Card 2">
      <p>Dies ist der Inhalt der zweiten Card.</p>
      <p>Sie können beliebigen Inhalt hier einfügen!</p>
    </CardComponent>

    <CardComponent>
      <p>Diese Card hat keinen Titel.</p>
    </CardComponent>
  </div>
</template>

<style scoped>
.app-container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  margin-bottom: 20px;
}

.card-component {
  margin-bottom: 16px;
}
</style>
