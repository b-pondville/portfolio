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
    default: "🔴",
    required: true,
  },
  btnLink: {
    type: String,
    default: "/",
    required: true,
  },
});
</script>

<template>
  <a :href="btnLink" class="btn" :style="{ color: btnColor }">
    <span>{{ btnPicto }}</span>
    <span>{{ btnText }}</span>
  </a>
</template>

<style lang="scss" scoped>
.btn {
  background-color: red;

  &:hover {
    background-color: blue;
  }
}
</style>
