<template>
  <div class="dailyserve">
    <i class="iconfont icon class_icon">&#xe638;</i>
    <div>
      <div
        class="class_title"
        :style="{ color: block_color }"
        @mousemove="tmove"
        @mouseleave="tleave"
        :class="{ underline_hover: title_underline }"
      >
        {{ classify.title }}
      </div>
      <div class="class_main">
        <div
          v-for="(item, index) in classify.main"
          :key="(item, index)"
          :style="{ color: main_color }"
          :class="{ underline_hover: index === content_underline_index }"
          @mousemove="cmove(index)"
          @mouseleave="cleave"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DailyServe",
  data() {
    return {
      block_color: "",
      main_color: "",
      title_underline: false,
      content_underline_index: -1,
    };
  },
  props: {
    classify: {
      type: Object,
    },
  },
  methods: {
    tmove() {
      this.title_underline = true;
    },
    tleave() {
      this.title_underline = false;
    },
    cmove(index) {
      this.content_underline_index = index;
    },
    cleave() {
      this.content_underline_index = -1;
    },
  },
};
</script>

<style>
.dailyserve {
  display: flex;
  position: relative;
  width: 100%;
  height: 73px;
  background-color: #f3f3f3;
  padding: 10px 0 19px 0;
}
.dailyserve::before {
  content: "";
  display: block;
  position: absolute;
  width: 12px;
  background-color: #f3f3f3;
  height: 100%;
  left: -12px;
  top: 0;
}
</style>