<template>
  <div class="classifyact border_left">
    <div v-if="brand.length != 0" class="cla_brand">
      <h4>品牌</h4>
      <div class="cla_b_content">
        <MiniText v-for="item in brand" :key="item" :brand="item"></MiniText>
      </div>
    </div>
    <div v-if="brand_act.length != 0" class="cla_b_act">
      <h4>品牌活动</h4>
      <div class="cla_b_act_content">
        <MiniText
          v-for="item in brand_act"
          :key="item"
          :brand="item"
        ></MiniText>
      </div>
    </div>
    <img v-if="imgURL.length != 0" :src="imgURL" alt="" />
  </div>
</template>

<script>
import MiniText from "./MiniText_act.vue";
export default {
  name: "ClassifyAct",
  props: {
    brand: {
      type: Array,
      default: [],
    },
    brand_act: {
      type: Array,
      default: [],
    },
    imgURL: {
      type: String,
      default: "",
    },
  },
  methods: {
    disp(item) {
      if (item.indexOf("-red") != -1) {
        this.color = "#e22a40";
      }
      return item.split("-red")[0];
    },
  },
  components: {
    MiniText,
  },
};
</script>

<style>
.classifyact {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.cla_brand {
  display: flex;
  flex-direction: column;
}
.cla_brand h4 {
  color: #515151;
  font-size: 12px;
  margin-bottom: 10px;
}

.classifyact .cla_b_content {
  display: flex;
  color: #666666;
  font-size: 12px;
  flex-wrap: wrap;
  padding: 0;
}
.cla_b_content span {
  width: 40%;
  margin-bottom: 10px;
}
.classifyact .cla_b_act_content {
  display: flex;
  color: #666666;
  font-size: 12px;
  flex-wrap: wrap;
  padding: 0;
}
.cla_b_act {
  display: flex;
  flex-direction: column;
}
.cla_b_act h4 {
  color: #e22a40;
  font-size: 12px;
  margin-bottom: 10px;
}
.cla_b_act span {
  width: 50%;
  margin-bottom: 10px;
}
.classifyact div {
  display: flex;
  flex: 0.33;
  padding: 15px 20px 0;
}
.classifyact img {
  display: flex;
  flex: 0.33;
  cursor: pointer;
}
</style>