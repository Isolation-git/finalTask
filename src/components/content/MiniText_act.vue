<template>
  <span
    class="minitext_act"
    :style="{ color: color, textDecoration: underline }"
    @mouseover="over"
    @mouseleave="leave"
    :title="disp(brand)"
    >{{ disp(brand) }}</span
  >
</template>

<script>
export default {
  name: "MiniText_act",
  data() {
    return {
      color: "",
      underline: "none",
    };
  },
  props: {
    brand: {
      type: String,
    },
  },
  methods: {
    disp(brand) {
      if (brand.indexOf("-red") != -1) {
        this.color = "#e22a40";
      }
      return brand.split("-red")[0];
    },
    over() {
      this.color = "#e22a40";
      this.underline = "underline";
    },
    leave() {
      this.color = "";
      this.underline = "none";
    },
  },
};
</script>

<style>
.minitext_act {
  cursor: pointer;
}
</style>