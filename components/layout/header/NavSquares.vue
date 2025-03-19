<script setup>
const { scrollToAnchor } = useAnchorScroll();

const lang = inject("lang");

const navLinks = reactive([
  {
    name: computed(() => (lang.value === "fr" ? "Hello !" : "Hello!")),
    href: "#hero",
    active: true,
  },
  {
    name: computed(() => (lang.value === "fr" ? "En bref" : "Briefly")),
    href: "#about",
    active: false,
  },
  {
    name: computed(() => (lang.value === "fr" ? "Parcours" : "Education")),
    href: "#education",
    active: false,
  },
  {
    name: computed(() => (lang.value === "fr" ? "Expérience" : "Experience")),
    href: "#experience",
    active: false,
  },
  {
    name: computed(() => (lang.value === "fr" ? "Compétences" : "Skills")),
    href: "#skills",
    active: false,
  },
  {
    name: computed(() => (lang.value === "fr" ? "Contact" : "Contact")),
    href: "#thankyou",
    active: false,
  },
]);

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

let isHovered = ref(false);
</script>

<template>
  <div id="scroll-squares" @click.stop @mouseenter.prevent="isHovered = true">
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
        @mouseenter.prevent="isHovered = true"
        v-motion
        :initial="{ opacity: 0, transform: 'translate(-20px, -48%)' }"
        :visible="{ opacity: 1, transform: 'translate(0px, -48%' }"
        v-show="isHovered"
        :for="index"
        >{{ link.name }}</label
      >
    </button>
  </div>
  <div v-show="isHovered" id="layer"></div>
  <div
    id="layer-trigger"
    @mouseenter.prevent="isHovered = true"
    @mouseleave.prevent="isHovered = false"
    @click.prevent
  ></div>
</template>

<style lang="scss" scoped>
#scroll-squares {
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: absolute;
  top: 50%;
  left: 0;
  padding-left: 0.8rem;
  transform: translateY(-50%);
  height: 85%;
  justify-content: center;

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
      transform: translateY(-48%);
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

  @include breakpoint(mobile) {
    display: none;
  }
}

#layer-trigger {
  position: fixed;
  bottom: 75px;
  left: 0;
  width: 200px;
  height: 100vh;
}

#layer {
  opacity: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  animation: 0.3s forwards alternate fadeIn;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
}
</style>
