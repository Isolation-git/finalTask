<template>
  <div class="hot">
    <div class="hot-title">
      <h2 style="margin-right: 10px">热点推荐</h2>
      <h2>Hot</h2>
    </div>
    <div class="hot-content">
      <div><TurnRed>天猫超市</TurnRed></div>
      <div><TurnRed>喵鲜生</TurnRed></div>
      <div class="N"><TurnRed>科技新品</TurnRed></div>
      <div class="H"><TurnRed>女装新品</TurnRed></div>
      <div><TurnRed>酷玩街</TurnRed></div>
      <div class="H"><TurnRed>内衣新品</TurnRed></div>
      <div><TurnRed>试美妆</TurnRed></div>
      <div><TurnRed>运动新品</TurnRed></div>
      <div class="H"><TurnRed>时尚先生</TurnRed></div>
      <div><TurnRed>精明妈咪</TurnRed></div>
      <div class="N"><TurnRed>吃乐会</TurnRed></div>
      <div><TurnRed>企业采购</TurnRed></div>
      <div><TurnRed>会员积分</TurnRed></div>
      <div><TurnRed>天猫国际</TurnRed></div>
      <div><TurnRed>品质频道</TurnRed></div>
    </div>
  </div>
</template>

<script>
import TurnRed from "./TurnRed.vue";

export default {
  name: "Hot",
  components: {
    TurnRed,
  },
};
</script>

<style>
.hot {
  position: relative;
  width: 460px;
  padding: 15px;
  display: flex;
  flex-direction: column;
}
.hot::after {
  position: absolute;
  display: block;
  content: "";
  width: 1px;
  height: 73%;
  right: 0px;
  background-color: #f5f5f5;
}
.hot-title {
  display: flex;
  color: #f67b1e;
  margin-bottom: 20px;
}
.hot-content {
  width: 460px;
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
.hot-content div {
  width: 80px;
  height: 20px;
  color: #666;
  position: relative;
}
.H::after {
  content: "";
  display: block;
  position: absolute;
  width: 12px;
  height: 13px;
  top: -10px;
  right: 30%;
  background-image: url(../../assets/images/hot.png);
}
.N::after {
  content: "";
  display: block;
  position: absolute;
  width: 12px;
  height: 13px;
  top: -10px;
  right: 30%;
  background-image: url(../../assets/images/top.png);
}
</style>