<template>
  <div class="footer">
    <div class="foot_ct">
      <img src="../../assets/images/tm_foot.png" alt="" />

      <div class="foot_content">
        <div>
          <h3 class="underline">购物指南</h3>
          <a href="javascript:;">购物流程</a>
          <a href="javascript:;">配送时效说明</a>
          <a href="javascript:;">配送区域及费用</a>
          <a href="javascript:;">购买生鲜须知</a>
          <a href="javascript:;">发票流程</a>
          <a href="javascript:;">商品限购说明</a>
        </div>
        <div>
          <h3 class="underline">售后服务</h3>
          <a href="javascript:;">退货规则</a>
          <a href="javascript:;">退货指南</a>
          <a href="javascript:;">保质期说明</a>
          <a href="javascript:;">联系客服</a>
        </div>
        <div>
          <h3 class="underline">自助服务</h3>
          <a href="javascript:;">订单物流查询</a>
          <a href="javascript:;">我的购物车</a>
          <a href="javascript:;">我的现金券</a>
          <a href="javascript:;">购物常见问题</a>
          <a href="javascript:;">建议反馈</a>
        </div>
        <div>
          <h3 class="underline">商家服务</h3>
          <a href="javascript:;">关于天猫超市</a>
          <a href="javascript:;">入驻天猫超市</a>
          <a href="javascript:;">商家常见问题</a>
          <a href="javascript:;">淘鲜达招商</a>
        </div>
        <div>
          <h3>随时随地逛</h3>
          <img src="../../assets/images/footer_ewm.png" alt="" />
        </div>
      </div>
      <img src="../../assets/images/cat.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.footer {
  width: 100%;
  height: 213px;
  border-top: 1px solid #d1d7dc;
}
.foot_ct {
  position: relative;
  width: 1190px;
  height: 100%;
  margin: 0 auto;
  border-top: 1px solid #ededed;
  padding: 22px 0 0 170px;
}
.foot_ct img:first-child {
  display: block;
  position: absolute;
  width: 112px;
  height: 40px;
  top: 20px;
  left: 0px;
}
.foot_ct img:nth-child(3) {
  display: block;
  position: absolute;
  width: 60px;
  height: 25px;
  bottom: 0px;
  left: 0px;
}
.foot_content {
  display: flex;
  width: 100%;
  height: 150px;
}
.foot_content div {
  width: 202px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 52px;
}
.foot_content div h3 {
  color: #646464;
  font-size: 16px;
  margin-bottom: 10px;
}
.foot_content div a {
  font-size: 12px;
  height: 20px;
  line-height: 20px;
  color: #8b8b8b;
}
.foot_content div a:hover {
  text-decoration: underline;
}
.foot_content div img {
  width: 105px;
  height: 105px;
  cursor: pointer;
}
</style>