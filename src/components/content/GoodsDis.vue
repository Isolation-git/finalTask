<template>
  <div class="goodsdis">
    <div class="dis_container">
      <p class="dis_title" id="im_drink">{{ home_display.im_drink.title }}</p>
      <GoodsBlock
        :data="home_display.im_drink"
        :left_color="'#b373fb'"
        @buy="buy"
        @animate="animate"
      ></GoodsBlock>
      <p class="dis_title" id="drink_wine">
        {{ home_display.drink_wine.title }}
      </p>
      <GoodsBlock
        :data="home_display.drink_wine"
        :left_color="'#83cfff'"
        @buy="buy"
        @animate="animate"
      ></GoodsBlock>
      <p class="dis_title" id="rice">{{ home_display.rice.title }}</p>
      <GoodsBlock
        :data="home_display.rice"
        :left_color="'#ffbb00'"
        @buy="buy"
        @animate="animate"
      ></GoodsBlock>
      <p class="dis_title" id="oil">{{ home_display.oil.title }}</p>
      <GoodsBlock
        :data="home_display.oil"
        :left_color="'#f4935f'"
        @buy="buy"
        @animate="animate"
      ></GoodsBlock>
      <p class="dis_title" id="cosme">{{ home_display.cosme.title }}</p>
      <GoodsBlock
        :data="home_display.cosme"
        :left_color="'#ff909f'"
        @buy="buy"
        @animate="animate"
      ></GoodsBlock>
    </div>
  </div>
</template>

<script>
import GoodsBlock from "./GoodsBlock.vue";
export default {
  name: "GoodsDis",
  props: {
    home_display: {
      type: Object,
    },
  },
  components: {
    GoodsBlock,
  },
  methods: {
    buy(data) {
      if (!window.localStorage.getItem("token")) {
        this.$router.push("/login");
      } else {
        this.$emit("buy", data);
      }
    },
    animate(data) {
      if (!window.localStorage.getItem("token")) {
        this.$router.push("/login");
      } else {
        this.$emit("animate", data);
      }
    },
  },
};
</script>

<style>
.goodsdis {
  width: 1190px;
  height: 3230px;
  margin: 0 auto;
}
.dis_title {
  display: block;
  width: 100%;
  height: 40px;
  cursor: text;
  color: #2f2f2f;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  padding: 5px 0 5px 5px;
}
.dis_container {
  width: 100%;
  height: 100%;
}
</style>