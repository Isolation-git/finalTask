<template>
  <span @mouseover="over" @mouseleave="leave" :class="{ Red: chageRed }">
    <slot></slot>
    <slot name="img"></slot>
  </span>
</template>

<script>
export default {
  name: "TurnRed",
  data() {
    return {
      chageRed: false,
    };
  },
  methods: {
    over() {
      this.chageRed = true;
    },
    leave() {
      this.chageRed = false;
    },
  },
};
</script>

<style>
.Red {
  color: red;
  text-decoration: underline;
  cursor: pointer;
}
</style>