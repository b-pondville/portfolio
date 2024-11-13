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

const returnStyleFromIndex = (index) => {
  const activeIndex = navLinks.findIndex((link) => link.active);
  const distance = Math.abs(activeIndex - index) || 1; // Pour éviter la division par zéro
  const size = 12;
  const scaleFactor = 1 / distance + 0.1; // Ajuste pour une décroissance plus douce

  return {
    width: `${size}px`,
    height: `${size}px`,
    transform: `scale(${scaleFactor})`,
  };
};

const isHovered = ref(false);
</script>

<template>
  <div
    id="scroll-squares"
    @mouseenter.prevent="isHovered = true"
    @mouseleave.prevent="isHovered = false"
    @click.stop
  >
    <button
      v-for="(link, index) in navLinks"
      :key="index"
      :name="index"
      class="scroll-square"
      :class="{ active: link.active }"
      :title="link.name"
      @click="scrollTo(link), (isHovered = false)"
    >
      <span class="square" :style="returnStyleFromIndex(index)"></span>
      <label
        v-motion
        :initial="{ opacity: 0, transform: 'translate(-20px, -50%)' }"
        :visible="{ opacity: 1, transform: 'translate(0px, -50%' }"
        v-show="isHovered"
        :for="index"
        >{{ link.name }}</label
      >
    </button>
  </div>
  <div v-motion-fade-visible v-show="isHovered" id="layer"></div>
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
    position: relative;
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: transparent;
    border: none;
    outline: none;

    .square {
      content: "";
      display: block;
      background-color: #8e8e8e;
      border-radius: 1px;
      transition: all 0.3s;
    }

    &.active {
      .square {
        transform: scale(1.5) !important;
        background-color: $primary-color;
      }
    }

    label {
      position: absolute;
      top: 50%;
      left: 100%;
      transform: translateY(-50%);
      padding: 1.8rem 0;
      color: white;
      border-radius: 0.5rem;
      font-size: 1rem;
      text-transform: uppercase;
      font: $heading-font;
      font-weight: 700;
      cursor: pointer;
      text-wrap: nowrap;
    }
  }
}

#layer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}
</style>
