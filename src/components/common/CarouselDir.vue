<template>
  <div
    class="car_dir dir_next"
    v-if="dir === 'next'"
    v-show="dirShow"
    title="下一个"
  >
    <a href="javascript:;" @click="dirClick(dir)" class="iconfont">&#xe603;</a>
  </div>
  <div
    class="car_dir dir_prve"
    v-else-if="dir === 'prev'"
    v-show="dirShow"
    title="上一个"
  >
    <a href="javascript:;" @click="dirClick(dir)" class="iconfont">&#xe603;</a>
  </div>
</template>

<script>
export default {
  name: "CarouselDir",
  props: {
    dir: String,
    dirShow: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, ctx) {
    const dirClick = (dir) => {
      ctx.emit("dirClick", dir);
    };
    return {
      dirClick,
    };
  },
};
</script>

<style>
.car_dir {
  position: absolute;
  top: 45%;
  width: 50px;
  height: 35px;
  background-color: #000;
  opacity: 0.5;
  z-index: 5;
  text-align: center;
  line-height: 35px;
}
.car_dir a {
  color: #fff;
  font-size: 28px;
}
.dir_next {
  right: 5px;
  transform: rotate(-90deg);
}
.dir_prve {
  left: 5px;
  transform: rotate(90deg);
}
</style>