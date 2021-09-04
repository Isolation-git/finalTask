<template>
  <div class="carouseldot" v-if="hasDot">
    <div class="dot_item" v-for="item in itemlen" :key="item">
      <a
        href="javascript:;"
        class="dot_link"
        :style="{
          backgroundColor: item - 1 === currentIndex ? dotBgColor : '#000000',
        }"
        @mouseover="dotOver(item - 1)"
        >{{ item }}</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "CarouselDot",
  props: {
    itemlen: {
      type: Number,
    },
    hasDot: {
      type: Boolean,
      default: true,
    },
    currentIndex: {
      type: Number,
    },
    dotBgColor: {
      type: String,
      default: "#c40000",
    },
  },
  //   methods: {
  //     dotOver(index) {
  //       console.log(index, this.currentIndex);
  //       this.currentIndex = index;
  //     },
  //   },
  setup(props, ctx) {
    const dotOver = (index) => {
      ctx.emit("dotOver", index);
    };
    return {
      dotOver,
    };
  },
};
</script>

<style>
.carouseldot {
  position: absolute;
  display: flex;
  height: 50px;
  padding-top: 15px;
  right: 10px;
  bottom: 0;
  background-color: transparent;
  justify-content: space-around;
  z-index: 1;
}
.dot_item {
  display: flex;
  width: 20px;
  height: 20px;
  margin: 0 2px;
}
.dot_link {
  color: #fff;
  width: 20px;
  height: 20px;
  font-size: 12px;
  border-radius: 20px;
  line-height: 20px;
  text-align: center;
  cursor: default;
}
</style>