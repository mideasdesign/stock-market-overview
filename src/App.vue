<script setup lang="ts">
import Card from '@/components/Card.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <h1>Stock App</h1>
    </div>
  </header>

  <main>
    <section>
      <Card>
        <h2>Erste Card</h2>
        <p>Das ist schon alles</p>
    </Card>
    </section>
    <section>
      <Card>
        <h2>Zweite Card</h2>
        <p>Hier kannst du beliebigen Content einfügen</p>
      </Card>
    </section>
  </main>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #d8dbdf;
  margin-top: 60px;
}
</style>
