<template>
  <div class="mallpage">
    <ClaTitle
      :classify="classify"
      :total="total"
      :totals="totals"
      :goods="goods"
      :animate_img="animate_img"
      @del="del"
      @sub="sub"
      @add="add"
      ref="childItem"
      @animate_end="animate_end"
    ></ClaTitle>
    <div class="_flex">
      <Classify :classify="classify"></Classify>
      <ImgShow
        :carouselImg="carouselImg"
        :tm_img="tm_img"
        :img_right="img_right"
      ></ImgShow>
    </div>
  </div>
</template>

<script>
import Classify from "./Classify.vue";
import ImgShow from "./ImgShow.vue";
import ClaTitle from "./ClaTitle.vue";
export default {
  name: "MallPage",
  props: {
    classify: {
      type: Object,
    },
    carouselImg: {
      type: Object,
    },
    tm_img: {
      type: Object,
    },
    img_right: {
      type: Object,
    },
    total: {
      type: Number,
    },
    goods: {
      type: Array,
    },
    totals: {
      type: Array,
    },
    animate_img: {
      type: Object,
    },
  },
  components: {
    Classify,
    ImgShow,
    ClaTitle,
  },
  methods: {
    del(data) {
      this.$emit("del", data);
    },
    sub(data) {
      this.$emit("sub", data);
    },
    add(data) {
      this.$emit("add", data);
    },
    animate() {
      this.$refs.childItem.animate();
    },
    animate_end(data) {
      this.$emit("animate_end", data);
    },
  },
};
</script>

<style>
._flex {
  display: flex;
}
.mallpage {
  display: flex;
  width: 1190px;
  height: 620px;
  margin: 0 auto;
  flex-direction: column;
  margin-bottom: 40px;
  /* background-color: pink; */
}
</style>