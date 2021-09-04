<template>
  <span @mouseover="contover" @mouseleave="contleave">
    <a :class="{ change: change, cont: true }">
      <slot></slot><slot name="content"><span>11</span></slot>
      <div id="minTri" :style="{ transform: rotate }"></div>
    </a>
    <div
      v-if="left"
      class="suspension mar-pad"
      :style="{ display: disp, left: '-1px' }"
    >
      <slot name="float"><span>11</span></slot>
    </div>
    <div
      v-else
      class="suspension mar-pad"
      :style="{ display: disp, right: '-1px' }"
    >
      <slot name="float"><span>11</span></slot>
    </div>
  </span>
</template>

<script>
export default {
  name: "FloatFrame",
  data() {
    return {
      change: false,
      disp: "none",
      deg: 0,
    };
  },
  props: {
    left: {
      type: Boolean,
    },
  },
  methods: {
    contover() {
      this.change = true;
      this.disp = "flex";
      this.deg = 180;
    },
    contleave() {
      this.change = false;
      this.disp = "none";
      this.deg = 0;
    },
  },
  computed: {
    rotate() {
      return "rotate(" + this.deg + "deg)";
    },
  },
};
</script>

<style>
span {
  position: relative;
}
#minTri {
  display: inline-block;
  margin: 0 2px;
  width: 0;
  height: 0;
  border: 3px solid transparent;
  border-top: 3px solid #999999;
  transform-origin: 50% 25%;
  transition: transform 0.3s;
}
.change {
  /* color: red;
  text-decoration: underline; */
  cursor: pointer;
  background-color: #fff;
}
.cont {
  padding: 5px;
}
.suspension {
  display: inline-block;
  position: absolute;
  margin: 0;
  top: 20px;
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-top: transparent;
}
</style>