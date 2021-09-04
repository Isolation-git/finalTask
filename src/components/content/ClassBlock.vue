<template>
  <div
    @click="click"
    :style="{ color: block_color }"
    :class="{ block_hover: hover, classblock: !hover }"
    @mousemove="blockMove"
    @mouseleave="blockLeave"
  >
    <i class="iconfont icon class_icon" :style="{ color: block_color }">{{
      icon
    }}</i>
    <div class="class_t_m_f">
      <div
        class="class_title"
        :style="{ color: block_color }"
        @mousemove="tmove"
        @mouseleave="tleave"
        :class="{ underline_hover: title_underline }"
      >
        {{ classify.title }}
        <div class="arrow_r">
          <i class="iconfont cla_icon_r" :style="{ color: block_color }"
            >&#xe603;</i
          >
        </div>
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
      <div class="sus_frame" :style="{ display: susShow, top: getTop }">
        <div class="sus_content">
          <MinClassBlock
            v-for="item in classify.category"
            :key="item"
            :classify="item"
          ></MinClassBlock>
        </div>
        <div class="sus_act">
          <ClassifyAct
            :brand="classify.brand"
            :brand_act="classify.brand_act"
            :imgURL="classify.imgURL"
          ></ClassifyAct>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MinClassBlock from "./MinClassBlock.vue";
import ClassifyAct from "./ClassifyAct.vue";
export default {
  name: "ClassBlock",
  data() {
    return {
      block_color: "",
      main_color: "",
      hover: false,
      title_underline: false,
      content_underline_index: -1,
      // susShow: "none",
      susShow: "flex",
    };
  },
  props: {
    classify: {
      type: Object,
    },
    icon: {
      type: String,
    },
    top: {
      type: String,
      default: "0",
    },
  },
  methods: {
    click() {
      console.log(this.classify);
    },
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
    blockMove() {
      this.block_color = "#fff";
      this.main_color = "#f1abb1";
      this.hover = true;
      this.susShow = "flex";
    },
    blockLeave() {
      this.block_color = "";
      this.main_color = "";
      this.hover = false;
      this.susShow = "none";
    },
  },
  computed: {
    getTop() {
      return parseInt(this.top) + "px";
    },
  },
  components: {
    MinClassBlock,
    ClassifyAct,
  },
  mounted() {
    this.susShow = "none";
  },
};
</script>

<style>
.block_hover {
  display: flex;
  position: relative;
  width: 100%;
  height: 73px;
  padding: 10px 0 19px 0;
  background-color: #e31a3a;
  border-bottom: 1px solid #e7e7e7;
}
.underline_hover {
  text-decoration: underline;
}
.block_hover::before {
  content: "";
  display: block;
  position: absolute;
  width: 20px;
  height: 100%;
  top: 0;
  left: -20px;
  background-color: #e31a3a;
}
.block_hover::after {
  content: "";
  display: block;
  position: absolute;
  width: 0;
  height: 0;
  top: 72px;
  left: -20px;
  border: 5px solid transparent;
  border-top-color: #b23c47;
  border-right-color: #b23c47;
}
.classblock {
  display: flex;
  position: relative;
  width: 100%;
  height: 73px;
  padding: 10px 0 19px 0;
  background-color: #fff;
  border-bottom: 1px solid #e7e7e7;
}
.class_icon {
  font-size: 20px;
  margin: 0 10px;
  height: 30px;
  line-height: 30px;
}
.class_t_m_f {
  display: flex;
  flex-direction: column;
}
.class_title {
  color: #515151;
  font-weight: 700;
  font-size: 14px;
  height: 30px;
  line-height: 30px;
  cursor: default;
}
.cla_icon_r {
  color: #cecece;
  font-size: 12px !important;
}
.arrow_r {
  display: flex;
  transform: rotate(-90deg);
  position: absolute;
  top: 10px;
  right: 10px;
}
.class_main {
  display: flex;
  justify-content: space-around;
  font-size: 12px;
}
.class_main div {
  margin: 5px 10px 0 0;
  cursor: pointer;
}
.sus_frame {
  display: flex;
  position: absolute;
  flex-direction: row;
  width: 950px;
  height: 366px;
  border: 5px solid #e22a40;
  background-color: #fff;
  top: 0;
  left: 228px;
  z-index: 3;
}
.sus_content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 7.5;
}
.sus_act {
  display: flex;
  flex-direction: column;
  flex: 2;
  background-color: #f7f8f8;
}
</style>