<template>
  <div class="imgshow">
    <div class="carousel_show">
      <Carousel
        :carouselImg="carouselImg"
        :autoplay="true"
        :duration="3000"
        :initial="0"
        :hasDot="true"
        :hasDirector="true"
      ></Carousel>
    </div>
    <div class="tianmao_img">
      <div class="row1">
        <div v-for="item in tm_img.row1" :key="item">
          <img :src="item.url" alt="" :title="item.title" />
        </div>
      </div>
      <div class="row2">
        <div v-for="item in tm_img.row2" :key="item">
          <img :src="item.url" alt="" :title="item.title" />
        </div>
      </div>
    </div>
    <div class="img_right">
      <img
        v-for="item in img_right"
        :key="item"
        :src="item.url"
        alt=""
        :title="item.title"
      />
    </div>
  </div>
</template>

<script>
import Carousel from "../common/Carousel.vue";
export default {
  name: "ImgShow",
  props: {
    carouselImg: {
      type: Object,
    },
    tm_img: {
      type: Object,
    },
    img_right: {
      type: Object,
    },
  },
  components: {
    Carousel,
  },
};
</script>

<style>
.imgshow {
  display: flex;
  width: 950px;
  height: 580px;
  flex-direction: column;
  flex-wrap: wrap;
}
.imgshow .carousel_show {
  position: relative;
  width: 750px;
  height: 288px;
}
.tianmao_img {
  display: flex;
  width: 750px;
  height: 292px;
  flex-direction: column;
}
.tianmao_img div {
  position: relative;
  width: 100%;
  height: 100%;
}
.tianmao_img img {
  cursor: pointer;
  transition: 0s;
  width: 100%;
  height: 100%;
}
.tianmao_img img:hover {
  position: absolute;
  transform: scale(1.12);
  z-index: 3;
  transition: all 0.3s linear;
}
.row1 {
  display: flex;
  flex: 2;
}
.row2 {
  display: flex;
  flex: 3;
}
.img_right {
  display: flex;
  width: 200px;
  height: 100%;
  flex-direction: column;
  padding-left: 10px;
}
.img_right img:hover {
  cursor: pointer;
}
</style>