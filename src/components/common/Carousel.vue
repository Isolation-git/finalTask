<template>
  <div class="carousel" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
    <div class="inner">
      <CarouselDir
        dir="prev"
        @dirClick="dirClick"
        :dirShow="dirShow"
      ></CarouselDir>
      <CarouselDot
        :hasDot="hasDot"
        :itemlen="itemlen"
        :currentIndex="currentIndex"
        :dotBgColor="dotBgColor"
        @dotOver="dotOver"
      ></CarouselDot>
      <CarouselItem v-for="(item, key, index) of carouselImg" :key="index">
        <img :src="item.url" alt="" :title="item.title" />
      </CarouselItem>
      <CarouselDir
        dir="next"
        @dirClick="dirClick"
        :dirShow="dirShow"
      ></CarouselDir>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted, onBeforeUnmount } from "vue";
import CarouselItem from "./CarouselItem.vue";
import CarouselDot from "./CarouselDot.vue";
import CarouselDir from "./CarouselDir.vue";

export default {
  name: "Carousel",
  props: {
    carouselImg: {
      type: Object,
    },
    autoplay: {
      type: Boolean,
      default: true,
    },
    duration: {
      type: Number,
      default: 3000,
    },
    initial: {
      type: Number,
      default: 0,
    },
    hasDot: {
      type: Boolean,
      default: true,
    },
    hasDirector: {
      type: Boolean,
      default: true,
    },
    dotBgColor: {
      type: String,
    },
  },
  components: {
    CarouselItem,
    CarouselDot,
    CarouselDir,
  },
  setup(props) {
    const state = reactive({
      currentIndex: props.initial,
      itemlen: 0,
      dirShow: false,
    });
    let timer = null;
    const autoplay = () => {
      if (props.autoplay)
        timer = setInterval(() => {
          setIndex("next");
        }, props.duration);
    };
    const mouseEnter = () => {
      clearInterval(timer);
      state.dirShow = true;
      timer = null;
    };
    const mouseLeave = () => {
      state.dirShow = false;
      autoplay();
    };
    const setIndex = (dir) => {
      switch (dir) {
        case "next":
          state.currentIndex += 1;
          if (state.currentIndex === state.itemlen) {
            state.currentIndex = 0;
          }
          break;
        case "prev":
          state.currentIndex -= 1;
          if (state.currentIndex === -1) {
            state.currentIndex = state.itemlen - 1;
          }
          break;
        default:
          break;
      }
    };

    const dotOver = (index) => {
      setTimeout(() => {
        state.currentIndex = index;
      }, 500);
    };
    const dirClick = (dir) => {
      setIndex(dir);
    };
    onMounted(() => {
      let len = 0;
      for (let i in props.carouselImg) {
        len += 1;
      }
      state.itemlen = len;
      autoplay();
    });

    onBeforeUnmount(() => {
      clearInterval(timer);
      timer = null;
    });
    return {
      ...toRefs(state),
      dotOver,
      mouseEnter,
      mouseLeave,
      dirClick,
    };
  },
};
</script>

<style>
.carousel {
  position: relative;
  width: 100%;
  height: 100%;
}
.carousel .inner {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
}
</style>