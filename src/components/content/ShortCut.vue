<template>
  <div class="shortcut">
    <div class="st_content">
      <div>
        <h3><i class="iconfont">&#xe630;</i>活动</h3>
        <p>
          <span>新人活动</span>
          <span>一站式购齐</span>
        </p>
      </div>
      <div>
        <h3><i class="iconfont">&#xe6a9; </i>价格</h3>
        <p>
          <span>0-10元</span>
          <span>10-30元</span>
          <span>30-70元</span>
          <span>70元以上</span>
        </p>
      </div>
      <div>
        <h3><i class="iconfont">&#xe631;</i>日用百货</h3>
        <p>
          <span>纸品争霸</span>
          <span>时尚买手</span>
          <span>美容江湖</span>
          <span>巾彩秀</span>
        </p>
      </div>
      <div>
        <h3>
          <i class="iconfont" style="margin-right: -20px">&#xe618;</i>食品
        </h3>
        <p>
          <span>酒水活动</span>
          <span>疯狂厨房</span>
          <span>零食欢乐购</span>
          <span>淘零食</span>
        </p>
      </div>
      <div>
        <h3><i class="iconfont">&#xe72a;</i>进口食品</h3>
        <p>
          <span>进口洋货</span>
          <span>进口饼干</span>
          <span>进口零食</span>
          <span>进口牛奶</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShortCut",
};
</script>

<style>
.shortcut {
  width: 1190px;
  height: 176px;
  margin: 0 auto;
  background-color: #efefef;
  padding: 20px 0;
  margin-bottom: 10px;
}
.st_content {
  display: flex;
  width: 1190px;
  height: 135px;
}
.st_content div {
  display: flex;
  flex-direction: column;
  width: 238px;
  height: 100%;
  padding: 20px;
  border-left: 1px solid #e4e4e4;
}
.st_content div h3 {
  color: #e8394e;
  font-weight: 400;
  font-size: 16px;
  height: 28px;
  margin-bottom: 10px;
}
.st_content div h3 i {
  font-size: 25px;
  margin-right: 5px;
  vertical-align: -2px;
}
.st_content div p {
  display: flex;
  flex-wrap: wrap;
  color: #444;
  font-size: 12px;
}
.st_content div p span {
  width: 98px;
  margin-bottom: 5px;
  cursor: pointer;
}
.st_content div p span:hover {
  color: #e8394e;
}
</style>