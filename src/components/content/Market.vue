<template>
  <div class="market">
    <div class="mar-title">
      <h2 style="margin-right: 10px">行业市场</h2>
      <h2>Market</h2>
    </div>
    <div class="mar-content">
      <div><TurnBlue>美妆</TurnBlue></div>
      <div><TurnBlue>电器</TurnBlue></div>
      <div class="NN"><TurnBlue>女装</TurnBlue></div>
      <div class="NN"><TurnBlue>男装</TurnBlue></div>
      <div><TurnBlue>女鞋</TurnBlue></div>
      <div><TurnBlue>男鞋</TurnBlue></div>
      <div class="NN"><TurnBlue>内衣</TurnBlue></div>
      <div><TurnBlue>箱包</TurnBlue></div>
      <div><TurnBlue>运动</TurnBlue></div>
      <div><TurnBlue>母婴</TurnBlue></div>
      <div><TurnBlue>家装</TurnBlue></div>
      <div><TurnBlue>医药</TurnBlue></div>
      <div><TurnBlue>食品</TurnBlue></div>
      <div class="HH"><TurnBlue>配饰</TurnBlue></div>
      <div><TurnBlue>汽车</TurnBlue></div>
    </div>
  </div>
</template>

<script>
import TurnBlue from "./TurnBlue.vue";
export default {
  name: "Market",
  components: {
    TurnBlue,
  },
};
</script>

<style>
.market {
  width: 460px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  position: relative;
}
.market::after {
  position: absolute;
  display: block;
  content: "";
  width: 1px;
  height: 73%;
  right: 15px;
  background-color: #f5f5f5;
}
.mar-title {
  display: flex;
  color: #2263d4;
  flex-direction: row;
  margin-bottom: 20px;
}
.mar-content {
  width: 460px;
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}
.mar-content div {
  width: 80px;
  height: 20px;
  color: #666;
  position: relative;
}
.HH::after {
  content: "";
  display: block;
  position: absolute;
  width: 12px;
  height: 13px;
  top: -10px;
  right: 55%;
  background-image: url(../../assets/images/hot.png);
}
.NN::after {
  content: "";
  display: block;
  position: absolute;
  width: 12px;
  height: 13px;
  top: -10px;
  right: 55%;
  background-image: url(../../assets/images/top.png);
}
</style>