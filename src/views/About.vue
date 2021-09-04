<template>
  <div class="home">
    <HeadImage :headURL="headimg"></HeadImage>
    <Nav>
      <template v-slot:login>
        <span>Hi!,</span>
        <TurnRed style="margin-right: 15px">{{ user.name }}</TurnRed>
        <TurnRed style="margin-right: 35px"
          >积分：<span style="font-weight: 700">{{
            user.integral
          }}</span></TurnRed
        >
        <TurnRed style="margin-right: 350px" @click="quit">退出</TurnRed>
      </template>

      <template v-slot:shopCart>
        <TurnRed style="margin-right: 15px"
          >购物车<span style="font-weight: 700">{{ sc_total }}</span
          >件</TurnRed
        >
      </template>
    </Nav>
    <Head :logoURL="logoimg" :city="city" :headRestIMG="headRestIMG"></Head>
    <MallPage
      :classify="classify"
      :carouselImg="carouselImg"
      :tm_img="tm_img"
      :img_right="img_right"
      :total="sc_total"
      :goods="goods"
      :totals="total"
      :animate_img="animate_img"
      @del="del"
      @sub="sub"
      @add="add"
      ref="childItem"
      @animate_end="animate_end"
    >
    </MallPage>
    <GoodsDis
      :home_display="home_display"
      @buy="buy"
      @animate="animate"
    ></GoodsDis>
    <NavSus></NavSus>
    <ShortCut> </ShortCut>
    <Footer></Footer>
    <About_tm></About_tm>
  </div>
</template>

<script>
// @ is an alias to /src
import HeadImage from "../components/content/HeadImage.vue";
import TurnRed from "../components/content/TurnRed.vue";
import { request } from "../network/request";
import Nav from "../components/content/Nav.vue";
import Head from "../components/content/Head.vue";
import MallPage from "../components/content/MallPage.vue";
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
      user: {
        name: window.localStorage.getItem("userId"),
        integral: 500,
      },
      sc_total: 0, //商品总数
      goods: [], //购物车中的商品
      total: [], //购物车中，每样商品各自的总数
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
    TurnRed,
    Head,
    MallPage,
    GoodsDis,
    NavSus,
    ShortCut,
    Footer,
    About_tm,
  },
  methods: {
    quit() {
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("userId");
      this.$router.push("/home");
    },
    buy(data) {
      this.wait = new Promise((resolve, reject) => {
        this.animate_img.url = data.imgURL;
        this.animate_img.isShow = "block";
        this.timer = setInterval(() => {
          if (this.animate_img.isShow == "none") {
            resolve();
            clearInterval(this.timer);
          }
        }, 100);
      }).then(() => {
        if (this.goods.indexOf(data) == -1) {
          this.total.push(1);
          this.goods.push(data);
          this.sc_total += 1;
        } else {
          this.total[this.goods.indexOf(data)] += 1;
        }
      });
    },
    animate(data) {
      this.animate_img.x = data.x;
      this.animate_img.y = data.y;
      this.$refs.childItem.animate();
    },
    animate_end() {
      this.animate_img.isShow = "none";
    },
    del(data) {
      this.total.splice(this.goods.indexOf(data), 1);
      this.goods.splice(this.goods.indexOf(data), 1);
      this.sc_total--;
    },
    sub(data) {
      this.total[data]--;
    },
    add(data) {
      if (this.total[data] == this.goods[data].store) {
        alert("所选商品数量已经达到库存！");
      } else {
        this.total[data]++;
      }
    },
  },
};
</script>

<style>
.home {
  height: 4672px;
  position: relative;
}
</style>
