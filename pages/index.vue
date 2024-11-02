<script setup>
definePageMeta({
  innerNavLinks: [
    { name: "Hero", href: "#hero", active: ref(true) },
    { name: "About", href: "#about", active: ref(false) },
    { name: "Formation", href: "#formation", active: ref(false) },
    { name: "Experience", href: "#experience", active: ref(false) },
    { name: "Stack", href: "#stack", active: ref(false) },
    { name: "Thank you", href: "#thankyou", active: ref(false) },
  ],
});
</script>

<template>
  <main>
    <section id="hero">
      <h1>Benjamin<strong>Pondville</strong></h1>
    </section>

    <section id="about" style="height: 100vh"></section>

    <section id="formation" style="height: 100vh"></section>

    <section id="experience" style="height: 100vh"></section>

    <section id="stack" style="height: 100vh"></section>

    <section id="thankyou" style="height: 100vh"></section>
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
