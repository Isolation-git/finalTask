<template>
  <div
    class="minclassblock"
    @click="click"
    ref="item"
    :class="{ border_left: border_left }"
  >
    <h4>{{ classify.title }}</h4>
    <div class="mcb_content">
      <MiniText
        v-for="item in classify.category"
        :key="item"
        :content="item"
      ></MiniText>
    </div>
  </div>
</template>

<script>
import MiniText from "./MiniText.vue";
export default {
  name: "MinClassBlock",
  data() {
    return {
      border_left: false,
    };
  },
  props: {
    classify: {
      type: Object,
    },
  },
  methods: {
    click() {
      // console.log(this.classify);
      console.log(this.border_left);
    },
  },
  components: {
    MiniText,
  },
  mounted() {
    if (this.$refs.item.offsetLeft % 250 > 200) {
      this.border_left = true;
      // console.log(this.$refs.item.offsetLeft);
      // console.log(this.$refs.item.offsetLeft % 250);
    }
    // console.log(this.$refs);
  },
};
</script>

<style>
.minclassblock {
  display: flex;
  flex-direction: column;
  height: 33%;
  width: 33%;
  /* background-color: pink; */
  padding: 16px 0 15px 25px;
}
.minclassblock h4 {
  color: #515151;
  font-size: 12px;
  margin-bottom: 10px;
}
.mcb_content {
  display: flex;
  color: #666666;
  font-size: 12px;
  flex-wrap: wrap;
}
.mcb_content span {
  margin: 0 16px 10px -10px;
  padding-left: 9px;
}
</style>