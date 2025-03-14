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
    required: false,
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
    <p v-if="reversePicto">{{ btnText }}</p>
    <img v-if="btnPicto" :src="btnPicto" alt="" />
    <p v-if="!reversePicto">{{ btnText }}</p>
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
  text-wrap: nowrap;
  font-weight: 500;

  &.primary {
    background-color: $primary-color;
    color: white;

    &:hover {
      img {
        filter: invert(1);
      }

      color: black;
    }
  }

  img {
    height: 100%;
    width: 100%;
    max-width: 22px;
    max-height: 22px;
  }
}
</style>
