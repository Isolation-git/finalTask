<template>
  <span @mouseover="over" @mouseleave="leave" :class="{ Blue: chageBlue }"
    ><slot></slot><slot name="img"></slot>
  </span>
</template>

<script>
export default {
  name: "TurnBlue",
  data() {
    return {
      chageBlue: false,
    };
  },
  methods: {
    over() {
      this.chageBlue = true;
    },
    leave() {
      this.chageBlue = false;
    },
  },
};
</script>

<style>
.Blue {
  color: #2263d4;
  text-decoration: underline;
  cursor: pointer;
}
</style>