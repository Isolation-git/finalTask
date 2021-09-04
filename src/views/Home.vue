<template>
  <div class="home">
    <HeadImage :headURL="headimg"></HeadImage>
    <Nav></Nav>
    <Head :logoURL="logoimg" :city="city" :headRestIMG="headRestIMG"></Head>
    <MallPageUnLogin
      :classify="classify"
      :carouselImg="carouselImg"
      :tm_img="tm_img"
      :img_right="img_right"
      :animate_img="animate_img"
    ></MallPageUnLogin>
    <GoodsDis :home_display="home_display"></GoodsDis>
    <NavSus></NavSus>
    <ShortCut></ShortCut>
    <Footer></Footer>
    <About_tm></About_tm>
  </div>
</template>

<script>
// @ is an alias to /src
import HeadImage from "../components/content/HeadImage.vue";
import { request } from "../network/request";
import Nav from "../components/content/Nav.vue";
import Head from "../components/content/Head.vue";
import MallPageUnLogin from "../components/content/MallPageUnLogin";
import GoodsDis from "../components/content/GoodsDis.vue";
import NavSus from "../components/content/NavSus.vue";
import ShortCut from "../components/content/ShortCut.vue";
import Footer from "../components/content/Footer.vue";
import About_tm from "../components/content/About_tm.vue";

export default {
  name: "Home",
  data() {
    return {
      headimg: "",
      logoimg: "",
      city: {},
      headRestIMG: {},
      classify: {},
      carouselImg: {},
      tm_img: {},
      img_right: {},
      home_display: {},
      animate_img: {
        url: "",
        isShow: "none",
        x: Number,
        y: Number,
      }, //商品进入购物车的动画图片
    };
  },
  created() {
    request(
      {
        url: "",
      },
      (res) => {
        const data = res.data;
        this.headimg = data.headIMG.url;
        this.logoimg = data.logoIMG.url;
        this.city = data.city;
        this.headRestIMG = data.headRestIMG;
        this.classify = data.pro_class;
        this.carouselImg = data.carouselIMG;
        this.tm_img = data.tm_img;
        this.img_right = data.img_right;
        this.home_display = data.home_display;
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  },
  components: {
    HeadImage,
    Nav,
    Head,
    MallPageUnLogin,
    GoodsDis,
    NavSus,
    ShortCut,
    Footer,
    About_tm,
  },
};
</script>

<style>
.home {
  height: 4672px;
  position: relative;
}
</style>
