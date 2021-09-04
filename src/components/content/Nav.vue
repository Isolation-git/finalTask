<template>
  <div id="nav">
    <div class="container">
      <i class="iconfont icon">&#xe607;</i>
      <TurnRed style="margin-right: 15px">天猫首页</TurnRed>
      <slot name="login">
        <span style="margin-right: 15px">喵，欢迎来到天猫</span>
        <TurnRed style="margin-right: 15px" @click="login">请登录</TurnRed>
        <TurnRed style="margin-right: 385px" @click="register"
          >免费注册</TurnRed
        >
      </slot>
      <FloatFrame style="margin-right: 15px" :left="left">
        <template v-slot:content><span>我的淘宝</span></template>
        <template v-slot:float
          ><div style="width: 75px">
            <TurnRed>已买到的宝贝</TurnRed> <TurnRed>已卖出的宝贝</TurnRed>
          </div>
        </template>
      </FloatFrame>
      <i class="iconfont icon">&#xe641;</i>
      <slot name="shopCart">
        <TurnRed style="margin-right: 15px">购物车</TurnRed>
      </slot>
      <FloatFrame style="margin-right: 15px" :left="left">
        <template v-slot:content><span>收藏夹</span></template>
        <template v-slot:float
          ><div style="width: 65px">
            <TurnRed>收藏的宝贝</TurnRed> <TurnRed>收藏的店铺</TurnRed>
          </div>
        </template>
      </FloatFrame>
      <span
        ><i class="iconfont icon" id="vertical-line" style="position: relative"
          >&#xe604;</i
        >
        <TurnRed
          style="margin-right: 20px"
          @mouseover="over"
          @mouseleave="leave"
          >手机版
          <template v-slot:img>
            <div class="sus-tianmao" :style="{ display: disp }">
              <img src="../../assets/images/tianmao.png" />
            </div>
          </template> </TurnRed
      ></span>
      <TurnRed style="margin-right: 15px">淘宝网</TurnRed>
      <FloatFrame style="margin-right: 15px" :left="right"
        ><template v-slot:content><span>商家支持</span></template>
        <template v-slot:float
          ><div style="width: 130px">
            <span class="bold">商家:</span>
            <ul class="business">
              <TurnRed>商家中心</TurnRed>
              <TurnRed>天猫规则</TurnRed>
              <TurnRed>商家入驻</TurnRed>
              <TurnRed>运营服务</TurnRed>
              <TurnRed>商家品控</TurnRed>
              <TurnRed>商家工具</TurnRed>
              <TurnRed>天猫智库</TurnRed>
              <TurnRed>喵言喵语</TurnRed>
            </ul>
            <span class="bold">帮助:</span>
            <ul class="busi-help">
              <TurnRed>商家服务大厅</TurnRed>
              <TurnRed>问商友</TurnRed>
            </ul>
          </div>
        </template></FloatFrame
      >
      <Floatframe :left="right"
        ><i class="iconfont icon">&#xe601;</i>
        <template v-slot:content><span>网站导航</span></template>
        <template v-slot:float
          ><div style="width: 1170px; display: flex">
            <Hot></Hot>
            <Market></Market>
            <Help></Help>
          </div> </template
      ></Floatframe>
    </div>
  </div>
</template>

<script>
import TurnRed from "./TurnRed.vue";
import FloatFrame from "./FloatFrame.vue";
import Floatframe from "../common/floatFrame.vue";
import Hot from "./Hot.vue";
import Market from "./Market.vue";
import Help from "./Help.vue";

import router from "../../router/index";

export default {
  name: "Nav",
  data() {
    return {
      disp: "none",
      right: "-1px",
      left: true,
      right: false,
    };
  },
  components: {
    TurnRed,
    FloatFrame,
    Hot,
    Market,
    Help,
    Floatframe,
  },
  methods: {
    over() {
      this.disp = "block";
    },
    leave() {
      this.disp = "none";
    },
    login() {
      router.push("/login");
      if (window.localStorage.getItem("token")) {
        router.push("/home/username=" + window.localStorage.getItem("userId"));
      }
    },
    register() {
      router.push("/register");
    },
  },
};
</script>

<style>
.bold {
  font-weight: 700;
  color: #666666;
}
.sus-tianmao {
  position: absolute;
  padding: 10px;
  top: 22px;
  right: -80px;
  border: 1px solid #ccc;
  background-color: #fff;
  z-index: 666;
}

.sus-tianmao::before {
  position: absolute;
  top: -12px;
  right: 100px;
  content: "";
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-bottom: 6px solid #fff;
}
.sus-tianmao::after {
  position: absolute;
  top: -6px;
  right: 0px;
  content: "";
  width: 100%;
  height: 6px;
  background-color: transparent;
}
.sus-tianmao img {
  width: 160px;
  height: 200px;
}
.mar-pad {
  line-height: 16px;
}

#nav {
  background-color: #f2f2f2;
}
.container {
  width: 1190px;
  height: 27px;
  margin: 0 auto;
  line-height: 27px;
  font-size: 12px;
  color: #999999;
}
.icon {
  color: #e22a40;
  font-size: 14px;
  margin-right: 2px;
}
#vertical-line::before {
  content: "";
  /* display: inline-block; */
  position: absolute;
  right: 17px;
  top: -2px;
  height: 20px;
  border-left: 1px solid #cccccc;
}
.business {
  display: flex;
  height: 80px;
  flex-wrap: wrap;
  justify-content: space-between;
  border-bottom: 1px dotted;
}
.busi-help {
  height: 45px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-bottom: 1px dotted;
}
</style>