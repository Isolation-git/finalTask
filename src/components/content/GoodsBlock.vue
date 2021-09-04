<template>
  <div class="goodsblock">
    <div class="dis_left" :style="{ background: left_color }">
      <div
        class="dis_l_item"
        v-for="(item, index) in data.category"
        :key="(item, index)"
        @mouseenter="hover(index)"
        @mouseleave="leave"
        :class="{ item_hover: currentIndex == index }"
        :style="{ background: disp(index) }"
      >
        <span :class="{ item_word_hover: currentIndex == index }">
          {{ item }}
        </span>
      </div>
    </div>
    <div class="goods">
      <Good
        :data="item"
        v-for="item in data.goods"
        :key="item"
        @buy="buy"
        @animate="animate"
      ></Good>
    </div>
    <div>
      <img src="../../assets/images/brand.png" alt="" />
    </div>
  </div>
</template>

<script>
import Good from "./Good.vue";
export default {
  name: "GoodsBlock",
  data() {
    return {
      currentIndex: -1,
    };
  },
  props: {
    data: {
      type: Object,
    },
    left_color: {
      type: String,
    },
  },
  methods: {
    hover(index) {
      this.currentIndex = index;
    },
    leave() {
      this.currentIndex = -1;
    },
    disp(index) {
      if (index === this.currentIndex) {
        return this.left_color;
      } else {
        return "#fff";
      }
    },
    buy(data) {
      this.$emit("buy", data);
    },
    animate(data) {
      this.$emit("animate", data);
    },
  },
  components: {
    Good,
  },
};
</script>

<style>
.goodsblock {
  display: flex;
  width: 100%;
  height: 556px;
  border-top: 2px solid #000000;
  margin-top: -2px;
  margin-bottom: 50px;
}
.dis_left {
  display: flex;
  width: 240px;
  height: 260px;
  padding: 30px 10px;
  flex-wrap: wrap;
  justify-content: space-around;
}
.dis_l_item {
  position: relative;
  width: 60px;
  height: 60px;
  background-color: #fff;
  border-radius: 30px;
  border: 1px solid transparent;
}
.dis_l_item span {
  display: inline-block;
  position: absolute;
  font-size: 12px;
  color: #2f2f2f;
  text-align: center;
  /* flex-wrap: wrap; */
  word-wrap: break-word;
  word-break: normal;
  width: 40px;
  max-width: 40px;
  max-height: 2.4em;
  top: 20px;
  left: 9px;
}
.item_hover {
  background-color: #b373fb;
  cursor: pointer;
  border: 1px solid gray;
}
.item_word_hover {
  color: #fff !important;
  text-decoration: underline;
}
.goods {
  width: 799px;
  height: 556px;
}
</style>