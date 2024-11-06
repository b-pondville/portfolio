<script setup>
const { scrollToAnchor } = useAnchorScroll();
const route = useRoute();
let navLinks = route.meta.innerNavLinks;

const scrollTo = (link) => {
  scrollToAnchor(link.href);
  navLinks.forEach((link) => {
    link.active = false;
  });
  link.active = true;
};

if (import.meta.client) {
  window.addEventListener("scroll", () => {
    navLinks.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (
          rect.top < window.innerHeight / 2 &&
          rect.bottom > window.innerHeight / 2
        ) {
          navLinks.forEach((link) => {
            link.active = false;
          });
          link.active = true;
        }
      }
    });
  });
}
</script>

<template>
  <div id="scroll-squares">
    <span
      v-for="(link, index) in navLinks"
      :key="index"
      class="scroll-square"
      :class="{ active: link.active }"
      :title="link.name"
      @click="scrollTo(link)"
    ></span>
  </div>
</template>

<style lang="scss" scoped>
#scroll-squares {
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: absolute;
  top: 50%;
  left: 0.8rem;
  transform: translateY(-50%);

  .scroll-square {
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &::after {
      content: "";
      display: block;
      width: 8px;
      height: 8px;
      background-color: #8e8e8e;
      border-radius: 1px;
      transition: all 0.3s;
    }

    &.active {
      &::after {
        background-color: $primary-color;
        transform: scale(2);
      }
    }
  }
}
</style>
