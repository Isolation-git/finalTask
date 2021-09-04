<template>
  <div :class="{ classtitle: !fixed, classtitle_fix: fixed }">
    <div class="cla_title" @mouseenter="enter">所有商品分类</div>
    <div class="cla_title_r">
      <div class="cla_home">
        <a href="javascript:;">首页</a>
        <a href="javascript:;" class="qycg">企业采购</a>
      </div>
    </div>
    <ShopCart :animate_img="animate_img"></ShopCart>
    <Classify
      :classify="classify"
      :class="{ classify_fix: true }"
      :style="{ display: cla_disp }"
      @mouseleave="leave"
    ></Classify>
  </div>
</template>

<script>
import ShopCart from "./ShopCart.vue";
import Classify from "./Classify.vue";
export default {
  name: "ClaTitle",
  data() {
    return {
      fixed: false,
      cla_disp: "none",
      flag: false,
    };
  },
  props: {
    classify: {
      type: Object,
    },
    animate_img: {
      type: Object,
    },
  },
  components: {
    ShopCart,
    Classify,
  },
  mounted() {
    window.addEventListener("scroll", this.handleScrollx, true);
  },
  methods: {
    handleScrollx() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      //   console.log(scrollTop);
      if (scrollTop >= 235) {
        this.fixed = true;
      } else {
        this.fixed = false;
      }

      if (scrollTop >= 790) {
        this.flag = true;
      } else {
        this.flag = false;
        this.cla_disp = "none";
      }
      return scrollTop;
    },
    enter() {
      if (this.flag) {
        this.cla_disp = "flex";
      }
    },
    leave() {
      if (this.flag) {
        this.cla_disp = "none";
      }
    },
  },
  computed: {
    totalPrice() {
      let totalPrice = 0;
      for (let i in this.goods) {
        totalPrice += this.goods[i].price * this.totals[i];
      }
      return totalPrice.toFixed(2);
    },
    totalKilo() {
      let totalKilo = 0;
      for (let i in this.goods) {
        totalKilo += this.goods[i].weight * this.totals[i];
      }
      return totalKilo.toFixed(1);
    },
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScrollx);
  },
};
</script>

<style>
.classify_fix {
  position: absolute;
  top: 36px;
  left: 0px;
}

.classtitle {
  position: relative;
  display: flex;
  width: 1190px;
  height: 36px;
  border-bottom: 1px solid #2f2f2f;
}
.classtitle_fix {
  position: fixed;
  display: flex;
  top: 0;
  width: 1190px;
  height: 36px;
  border-bottom: 1px solid #2f2f2f;
  /* background-color: #fff; */
  z-index: 10;
}
.classtitle_fix::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: -165px;
  width: 1519.2px;
  height: 36px;
  background-color: #fff;
  border-bottom: 1px solid #2f2f2f;
}
.cla_title {
  width: 240px;
  height: 36px;
  text-align: center;
  line-height: 36px;
  background-color: #2f2f2f;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  z-index: 10;
}
.cla_home {
  display: flex;
}
.cla_home a {
  position: relative;
  padding: 0 25px;
  height: 36px;
  line-height: 36px;
  color: #333333;
  font-weight: 700;
}
.cla_home a:hover {
  color: #e22a40;
}
.qycg::before {
  content: "";
  position: absolute;
  width: 0px;
  height: 12px;
  border-left: 1px solid #d9d9d9;
  top: 13px;
  left: 0;
}
.sc_content_title {
  width: 100%;
  height: 20px;
  background-color: #fff8e2;
  color: #333333;
  font-size: 12px;
  line-height: 20px;
  text-indent: 0.5em;
  cursor: text;
}
.sc_content_cont {
  flex-direction: column;
  overflow: auto;
  width: 100%;
  height: 200px;
}
.scGood {
  display: flex;
  width: 100%;
  height: 48px;
  border-bottom: 1px dashed #cccccc;
}
.sc_content_totalPrice {
  padding-left: 10px;
  color: #000000;
  font-size: 12px;
  cursor: text;
  border-top: 1px solid #bf0000;
}
.sc_content_totalPrice span {
  color: #cc0000;
  font-size: 14px;
  font-weight: 700;
}
.sc_content_totalPrice i {
  font-style: normal;
  color: #808080;
  margin-left: 15px;
}
.sc_content_totalPrice a {
  display: block;
  color: #fff;
  background-color: #c92626;
  text-align: center;
  line-height: 20px;
  border: 2px solid #a93931;
  width: 72px;
  height: 25px;
  margin: 10px auto;
}
.sc_content_totalPrice a:hover {
  text-decoration: none;
  background-color: #b90301;
}
</style>