<template>
  <span @mouseover="over" @mouseleave="leave" :class="{ turn: chage }"
    ><slot></slot>
  </span>
</template>

<script>
export default {
  name: "Turn",
  data() {
    return {
      chage: false,
    };
  },
  methods: {
    over() {
      this.chage = true;
    },
    leave() {
      this.chage = false;
    },
  },
};
</script>

<style>
.turn {
  text-decoration: underline;
  cursor: pointer;
}
</style>