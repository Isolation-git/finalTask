<template>
  <span
    class="minitext"
    :class="{ border_left: border_left }"
    :style="{ color: color, textDecoration: underline }"
    :title="disp()"
    ref="item"
    @mouseover="over"
    @mouseleave="leave"
    >{{ disp() }}</span
  >
</template>

<script>
export default {
  name: "MiniText",
  data() {
    return {
      color: "#666666",
      border_left: false,
      underline: "none",
    };
  },
  props: {
    content: {
      type: String,
    },
  },
  methods: {
    disp(e) {
      if (this.content.indexOf("-red") != -1) {
        this.color = "#e22a40";
      }
      return this.content.split("-red")[0];
    },
    over() {
      (this.color = "#e22a40"), (this.underline = "underline");
    },
    leave() {
      this.color = "";
      this.underline = "none";
    },
  },
  mounted() {
    if (this.$refs.item.offsetLeft % 244 > 30) {
      this.border_left = true;
      // console.log(this.$refs.item.offsetLeft);
      // console.log(this.$refs.item.offsetLeft % 250);
    }
  },
};
</script>

<style>
.minitext {
  display: flex;
  cursor: pointer;
}
.border_left {
  border-left: 1px solid #e7e7e7;
}
</style>