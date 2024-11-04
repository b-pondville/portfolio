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

    <section id="about">
      <div class="highlight">
        <h2>Shortcut</h2>
        <p>
          As a passionate Frontend Developer with 4 years of experience, I
          specialize in creating intuitive and responsive user interfaces using
          modern web technologies like HTML, CSS and JavaScript. My journey in
          frontend development has sharpened my skills in building seamless user
          experiences that are both visually appealing and functionally robust.
        </p>

        <p>
          Driven by a desire to broaden my technical horizons and tackle more
          complex challenges, I'm now transitioning into a Fullstack Developer
          role. I'm currently expanding my knowledge of backend technologies. My
          goal is to master the full spectrum of web development, enabling me to
          build and maintain entire applications from start to finish.
        </p>
        <p>
          I'm excited to apply my growing skill set in new and innovative
          projects, and I'm always eager to connect with like-minded
          professionals who share a passion for technology and continuous
          learning.
        </p>
      </div>
    </section>

    <div id="vertical-line"></div>

    <section id="formation"></section>

    <section id="experience"></section>

    <section id="stack"></section>

    <section id="thankyou"></section>
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

#vertical-line {
  position: relative;
  top: 0;
  left: 60%;
  width: 2px;
  height: 100vh;
  background-color: blue;
}

#about,
#formation,
#experience,
#stack,
#thankyou {
  position: relative;
}

#about {
  height: 100vh;

  .highlight {
    position: absolute;
    top: 0;
    left: 60%;
    max-width: calc(30% - 6rem);
    height: calc(100vh - 6rem);
    padding: 3rem;
    background-color: $primary-color;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
