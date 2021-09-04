<template>
  <div class="mui-global-fragment-load">
    <div class="about_tm_ct">
      <p>
        <a href="javascript:;">关于天猫</a>
        <a href="javascript:;">商家服务大厅</a>
        <a href="javascript:;">开发平台</a>
        <a href="javascript:;">诚聘英才</a>
        <a href="javascript:;">联系我们</a>
        <a href="javascript:;">网站合作</a>
        <a href="javascript:;">法律声明</a>
        <a href="javascript:;">隐私权政策</a>
        <a href="javascript:;">知识产权</a>
        <a href="javascript:;">廉正举报</a>
        <a href="javascript:;">不当竞争举报</a>
      </p>
      <p>
        <a href="javascript:;">阿里巴巴集团</a>|
        <a href="javascript:;">淘宝网</a>| <a href="javascript:;">天猫</a>|
        <a href="javascript:;">聚划算</a>|
        <a href="javascript:;">全球速卖通</a>|
        <a href="javascript:;">阿里巴巴国际交易市场</a>|
        <a href="javascript:;">1688</a>| <a href="javascript:;">阿里妈妈</a>|
        <a href="javascript:;">飞猪</a>| <a href="javascript:;">阿里云计算</a>|
        <a href="javascript:;">AliOS</a>| <a href="javascript:;">阿里通信</a>|
        <a href="javascript:;">万网</a>| <a href="javascript:;">高德</a>|
        <a href="javascript:;">UC</a>| <a href="javascript:;">友盟</a>|
        <a href="javascript:;">虾米</a>| <a href="javascript:;">钉钉</a>|
        <a href="javascript:;">支付宝</a>| <a href="javascript:;">阿里安全</a>
      </p>
      <div class="license">
        <span class="underline">增值电信业务经营许可证：浙B2-20110446</span>
        <span>市场名称登记证：工商网市字3301004119号</span>
        <span>出版物网络交易平台服务经营备案证： 新出发浙备字第2019002号</span>
        <span
          >互联网违法和不良信息举报电话：0571-81683755
          blxxjb@alibaba-inc.com</span
        >
        <span>互联网药品信息服务资质证书编号：浙-（经营性）-2017-0005</span>
        <span class="underline"
          ><img src="../../assets/images/Public-Security.png" />浙公网安备
          33010002000120号</span
        >
        <span
          >医疗器械网络交易服务第三方平台备案：（浙）网械平台备字[2018]第00002号</span
        >
      </div>
      <div class="license">
        <span>浙江省网络食品销售第三方平台提供者备案：浙网食A33010002</span>
        <span class="underline">12318举报</span>
        <span class="underline">浙B2-20110446-1</span>
      </div>
      <i>© 2003-现在 TMALL.COM 版权所有</i>
    </div>
  </div>
</template>

<script>
export default {
  name: "About_tm",
};
</script>

<style>
.mui-global-fragment-load {
  width: 100%;
  height: 175px;
  background-color: #c40000;
}
.about_tm_ct {
  width: 1190px;
  height: 100%;
  margin: 0 auto;
}
.about_tm_ct p {
  padding: 10px 0;
  color: #fff;
  font-size: 12px;
}
.about_tm_ct p a {
  color: #ffffff;
  font-size: 12px;
  margin-right: 5px;
}
.about_tm_ct p a:hover {
  text-decoration: underline;
}
.about_tm_ct i {
  display: block;
  font-size: 12px;
  color: #686868;
  margin-top: -2px;
}
.license {
  width: 1190px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
.license span {
  margin-right: 65px;
  font-size: 12px;
  color: #a4a4a4;
  height: 23px;
}
.license span img {
  vertical-align: baseline;
}
.underline:hover {
  cursor: pointer;
  text-decoration: underline;
}
</style>