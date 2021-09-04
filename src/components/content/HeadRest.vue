<template>
  <div class="headrest">
    <i>1</i>
    <span>一站式购齐</span>
    <i>88</i>
    <span>满88包邮</span>
    <img :src="headRestIMG.img1.url" />
    <img :src="headRestIMG.img2.url" />
  </div>
</template>

<script>
export default {
  name: "HeadRest",
  props: {
    headRestIMG: {
      type: Object,
    },
  },
};
</script>

<style>
.headrest {
  position: relative;
  display: flex;
  width: 290px;
  height: 95px;
  color: #666666;
  margin-left: 15px;
}
.headrest span {
  display: flex;
  position: relative;
  height: 40px;
  font-size: 12px;
  font-weight: 700;
  align-self: center;
  line-height: 40px;
  padding: 0 15px;
  cursor: pointer;
}
.headrest i:first-child {
  text-align: center;
  font-style: normal;
  color: #5fc444;
  display: block;
  position: absolute;
  font-size: 16px;
  font-weight: 700;
  width: 30px;
  height: 30px;
  line-height: 25px;
  top: 34px;
  left: -8px;
  border: 3px solid #5fc444;
  border-radius: 15px;
  transform: scale(0.5);
}
.headrest i:nth-child(3) {
  text-align: center;
  font-style: normal;
  color: #5fc444;
  display: block;
  position: absolute;
  font-size: 16px;
  font-weight: 700;
  width: 30px;
  height: 30px;
  line-height: 25px;
  top: 34px;
  left: 82px;
  border: 3px solid #5fc444;
  border-radius: 15px;
  transform: scale(0.5);
}
.headrest img {
  margin-top: 30px;
  margin-left: 10px;
  width: 36px;
  height: 36px;
  cursor: pointer;
}
</style>