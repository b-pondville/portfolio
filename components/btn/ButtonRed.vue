<script setup>
const props = defineProps({
  btnText: {
    type: String,
    default: "Click me",
    required: true,
  },
  btnColor: {
    type: String,
    default: "black",
    required: true,
  },
  btnPicto: {
    type: String,
    required: false,
  },
  btnLink: {
    type: String,
    default: "/",
    required: true,
  },
});
</script>

<template>
  <a :href="btnLink" :class="[btnColor, 'btn']">
    <img v-if="btnPicto" :src="btnPicto" alt="" />
    <span>{{ btnText }}</span>
  </a>
</template>

<style lang="scss" scoped>
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  text-decoration: none;
  width: fit-content;
  gap: 0.5rem;
  font-family: $body-font;

  &:hover {
    filter: brightness(1.1);
  }

  &.primary {
    background-color: $primary-color;
    color: white;
  }
}
</style>
