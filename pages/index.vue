<script setup>
definePageMeta({
  layout: "default",
});
</script>

<template>
  <main>
    <div id="hero">
      <h1>Benjamin<strong>Pondville</strong></h1>
    </div>

    <div id="about" style="height: 100vh"></div>

    <div id="formation" style="height: 100vh"></div>

    <div id="experience" style="height: 100vh"></div>

    <div id="stack" style="height: 100vh"></div>

    <div id="thankyou" style="height: 100vh"></div>
  </main>
</template>

<style lang="scss" scoped>
#hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 1rem;
}
</style>
