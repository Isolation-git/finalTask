<template>
  <div class="help">
    <div class="help-title">
      <h2 style="margin-right: 10px">服务指南</h2>
      <h2>Help</h2>
    </div>
    <div class="help-content">
      <div><Turn>帮助中心</Turn></div>
      <div><Turn>品质保障</Turn></div>
      <div><Turn>特色服务</Turn></div>
      <div><Turn>7天退换货</Turn></div>
    </div>
  </div>
</template>

<script>
import Turn from "../common/Turn.vue";
export default {
  name: "Help",
  components: {
    Turn,
  },
};
</script>

<style>
.help {
  position: relative;
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
}
.help-title {
  display: flex;
  margin-bottom: 20px;
}
.help-content {
  height: 60px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.help-content div {
  width: 100px;
  height: 20px;
  color: #666;
  position: relative;
}
</style>