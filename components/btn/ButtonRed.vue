<script setup>
const props = defineProps({
  btnText: {
    type: String,
    default: "Click me",
    required: true,
  },
  btnColor: {
    type: String,
    default: "primary",
    required: false,
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
  reversePicto: {
    type: Boolean,
    default: false,
    required: false,
  },
});
</script>

<template>
  <a :href="btnLink" :class="[btnColor, 'btn']">
    <span v-if="reversePicto">{{ btnText }}</span>
    <img v-if="btnPicto" :src="btnPicto" alt="" />
    <span v-if="!reversePicto">{{ btnText }}</span>
  </a>
</template>

<style lang="scss" scoped>
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0rem 1rem;
  height: 37px;
  border-radius: 0.5rem;
  text-decoration: none;
  width: fit-content;
  gap: 0.5rem;
  font-family: $body-font;
  border: 2px solid $bkg-color;

  &:hover {
    filter: brightness(1.1);
  }

  &.primary {
    background-color: $primary-color;
    color: white;
  }

  img {
    height: 100%;
    width: 100%;
    max-width: 22px;
    max-height: 22px;
  }
}
</style>
